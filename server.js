let express = require('express')
let app = express()
let prettyjson = require('prettyjson')
let osmosis = require('osmosis')

// console.log(prettyjson.render(test));

app.route('/data/:ticker')
  .get(function (req, res) {
    console.log('req body', req.body);
    res.send('Get a random data')
  })
  .post(function (req, res) {
    console.log('/data/', req.params['ticker']);
    
    let url = `http://performance.morningstar.com/fund/performance-return.action?t=${req.params['ticker']}&region=usa&culture=en-US`

    osmosis
      .get('www.brettcelestre.com')
      .find('h1')
      .set('name')
      .data(function(data) {
            // do something with data data
            console.log('Data', data);
        })
      .log(console.log)
      .error(console.log)
      .debug(console.log)


    // console.log(obj);
    res.send(url)
  })
  .put(function (req, res) {
    res.send('Update the data')
  })

app.listen(2727, function () {
  console.log('Example app listening on port 2727!')
})
