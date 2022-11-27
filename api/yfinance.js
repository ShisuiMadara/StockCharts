var yahooFinance = require('yahoo-finance');

async function getData (req, res) {
    
    const symbol = "AAPL" //req.symbol
    const from = '2012-01-01'
    const to =  '2012-12-31'

    let f = 0

    let data

    await yahooFinance.historical({symbol, from, to}, function (err, quotes) {
        if(err) {
            console.log(err)
            f = 1
        }
        console.log(quotes);
        
        data = quotes
        
    });

    if(f === 1) {
        res.send({
            status: false,
            data: "failed"
        })
    }
    res.send({
        status: true,
        data: data
    })

}

getData()