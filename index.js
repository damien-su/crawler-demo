let cheerio = require('cheerio');
let https = require('https');
let MongoClient = require('mongodb').MongoClient;

let url = 'https://www.xiami.com/';
https.get(url,function (res) { 
    let titles = [];
    let html = '';
    res.setEncoding('utf-8');
    res.on('data',function (chunk) {  
        html += chunk;
    });

    res.on('end',function () { 
        let $ = cheerio.load(html);
        $('#slider img').each(function (index,item) { 
            let $item = $(item);
            titles.push({
                src:'http:'+$item.attr('src')
            })
         })
         console.log(titles);
     });
 })