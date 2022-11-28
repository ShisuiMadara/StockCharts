import axios from "axios"
import React from "react"
import {
  LineChart,
  XAxis,
  CartesianGrid,
  Line,
  Tooltip,
  YAxis,
  Label,
} from 'recharts'
import CustomTooltip from "./tooltip.js"



export default function Graph() {

  let [responseData, setResponseData] = React.useState('')
  let [company, setCompany] = React.useState('')
  let [from, setFrom] = React.useState('')
  let [to, setTo] = React.useState('')
  let [message, setMessage] = React.useState('')

  const fetchData = (event) => {
    event.preventDefault()

    setMessage('Loading...')
     
    var data = {
      "symbol" : company,
      "from" : from,
      "to" : to
    };
    
    var config = {
      method: 'post',
      url: 'http://localhost:5000/api/yfinance.js',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then((response) => {
      setResponseData(response.data.data)
      setMessage('')
    })
    .catch((error) => {
      alert(error)
    })
}

  
  return (
    <div className="labels">
        <h2>Analyze Stock Data</h2>
        <form onSubmit={fetchData}>
            <fieldset>
                <legend>Search Stock Market</legend>
                <label htmlFor="company">
                    <input
                        required
                        type='text'
                        placeholder='Enter company'
                        value={company}
                        onChange={(company) => setCompany(company.target.value)}
                    />

                  <input
                        required
                        type='date'
                        placeholder='From date'
                        value={from}
                        onChange={(from) => setFrom(from.target.value)}
                    />

                    <input
                        required
                        type='date'
                        placeholder='To date'
                        value={to}
                        onChange={(to) => setTo(to.target.value)}
                    />
                </label>
                <button type='submit'>Submit</button>
            </fieldset>
        </form>

       <p>{message}</p>

          <LineChart
              width={900}
              height={500}
              
              data={responseData}
              margin={{ top: 50, right: 20, left: 10, bottom: 5 }}
              >
              <YAxis tickCount={10} type="number" width={80}>
                <Label value="Close Price" position="insideLeft" angle={270} />
              </YAxis>
              <XAxis padding={{left: 5, right: 5}} tickCount={10} height={90}>
                <Label value="Date" />
              </XAxis>

              <Tooltip content={<CustomTooltip payload={responseData}/>} />
              <CartesianGrid stroke="#5B84B1FF" />
              <Line type="monotone" dataKey="close" stroke="#000000" yAxisId={0} />
          </LineChart> 

     </div>  
  )
}

