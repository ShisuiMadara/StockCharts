var yahooFinance = require('yahoo-finance');


async function getData (req, res) {

    req = req.body;
    const symbol = req.symbol
    const from = req.from
    const to =  req.to

    let f = 0

    let data

    await yahooFinance.historical({symbol, from, to}, function (err, quotes) {
        if(err) {
            console.log(err)
            f = 1
        }
        
        data = quotes
        console.log(quotes);
        
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


exports.execute = getData