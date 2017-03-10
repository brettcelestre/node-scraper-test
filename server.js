let express = require('express')
let app = express()
let prettyjson = require('prettyjson')

let osmosis = require('osmosis')

let path = require('path')
let childProcess = require('child_process')
let phantomjs = require('phantomjs')
let binPath = phantomjs.path

let scraperjs = require('scraperjs')

let axios = require('axios')
let cheerio = require('cheerio')
let cheerioTableparser = require('cheerio-tableparser')

// console.log(prettyjson.render(test));

app.route('/data/:ticker')
  .get(function (req, res) {
    console.log('req body', req.body);
    res.send('Get a random data')
  })
  .post(function (req, res) {
    console.log('/data/', req.params['ticker']);

    let url = `http://performance.morningstar.com/fund/performance-return.action?t=${req.params['ticker']}&region=usa&culture=en-US`

    //CHERRIO + AXIOS TEST
    // axios.get(url).then( (response) => {
    //   let $ = cheerio.load(response.data);
    //   let kurs = [];
      // let $ = cheerio.load("<table id='complex'> \
      //       <tr><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td></tr> \
      //       <tr><td rowspan='5'>1a</td><td>2a</td><td>3a</td><td>4a</td><td>5a</td></tr> \
      //       <tr><td rowspan='2' colspan='2'>2b</td><td>4b</td><td>5b</td></tr> \
      //       <tr><td rowspan='2'>4c</td><td>5c</td></tr> \
      //       <tr><td rowspan='2'>2d</td><td>3d</td><td>5d</td></tr> \
      //       <tr><td>3e</td><td>4e</td><td>5e</td></tr> \
      //     </table>");

      // cheerioTableparser($);

      // console.log($('tr.action').children());
      // console.log('table???' + $('table'));
      // console.log($('div.content div.result.notranslate table'));

      // let theTable = $('div.content div.result.notranslate table tbody');
      // cheerioTableparser(theTable);
      // let data = $("#complex").parsetable()
      // console.log(data);

      // let data = $("#html").parsetable();
      // console.log('hello?');
      // console.log('daaaata' + data);

      // ['_root'][0]['children'][0]

      // kurs.push($('table.r_table3').children().third().text());
    //   $('tr.action').each( (i, elm) => {
    //     console.log('hi');
    //     console.log(i);
    //     console.log(elm);
    //     kurs.push( {
    //       // text: $(elm).children().first().text()
    //       text: $(elm).text(),
    //     });
    //   });
    //   return(kurs);
    // })
    // .then ( (kurs) => {
    //   // console.log(kurs);
    // });

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
