let express = require('express')
let app = express()
let prettyjson = require('prettyjson')

let osmosis = require('osmosis')

let path = require('path')
let childProcess = require('child_process')
let phantomjs = require('phantomjs')
let binPath = phantomjs.path

let scraperjs = require('scraperjs');



// console.log(prettyjson.render(test));

app.route('/data/:ticker')
  .get(function (req, res) {
    console.log('req body', req.body);
    res.send('Get a random data')
  })
  .post(function (req, res) {
    console.log('/data/', req.params['ticker']);

    let url = `http://performance.morningstar.com/fund/performance-return.action?t=${req.params['ticker']}&region=usa&culture=en-US`

    // SCRAPERJS TEST
    // scraperjs.StaticScraper.create(url)
    //   .scrape(function($) {
    //     return $("td.row_data").map(function() {
    //       return $(this).text();
    //     }).get();
    //   })
    //   .then(function(news) {
    //       console.log(news);
    //   })

    // OSMOSIS TEST
    // osmosis
    //   .get(url)
    //   // .get('http://www.yourhtmlsource.com/tables/basictables.html')
    //   .find('h1')
    //   .set('TITLE')
    //   // https://css2xpath.github.io/
    //   // div.wrapper div.r_bodywrap div.col5 div#total_returns_page div#tabday div#tab-1day-content table.print97 tbody tr.action td.row_data
    //   .paginate('.//div[contains(concat(" ",normalize-space(@class)," ")," wrapper ")]//div[contains(concat(" ",normalize-space(@class)," ")," r_bodywrap ")]//div[contains(concat(" ",normalize-space(@class)," ")," col5 ")]//div[@id="total_returns_page"]//div[@id="tabday"]//div[@id="tab-1day-content"]//table//tr//td', 5)
    //   .set('TABLE_DATA')
    //   .data(function(data) {
    //       console.log('Data', data);
    //     })
    //   .log(console.log)
    //   .error(console.log)
    //   .debug(console.log)


    // console.log(obj);
    res.send(url)
  })
  .put(function (req, res) {
    res.send('Update the data')
  })

app.listen(2727, function () {
  console.log('Example app listening on port 2727!')
})
