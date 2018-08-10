var superagent = require('superagent');
var cheerio = require('cheerio');
var express = require('express');
var app = express();

//安徽药市
app.get('/anhui/:id',function(req,res,next){
    var id  = req.params.id;
    var url = null;
    if(id === 1){
        url = 'http://www.zyctd.com/jiage/1-0-341699.html';
    }else{
        url = `http://www.zyctd.com/jiage/1-0-341699-${id}.html`;
    }
    superagent.get(url)
        .end(function (err, sres) {
            if (err) {
                return next(err);
            }
            var $ = cheerio.load(sres.text);
            var items = [];
            $(".priceTable .priceTableRows li").each(function(idx,element){
                items.push({
                    name:$(element).children('.w1').text(),
                    specification:$(element).children('.w2').text(),
                    bazaar:$(element).children('.w9').text(),
                    newPrice:$(element).children('.w3').text(),
                    weekChange:$(element).children('.w5').text(),
                    monthChange:$(element).children('.w6').text(),
                    yearChange:$(element).children('.w7').text(),
                })
            });
            res.json(items); 
        })
});

//安国药市
app.get('/anguo/:id',function(req,res,next){
    var id  = req.params.id;
    var url = null;
    if(id === 1){
        url = 'http://www.zyctd.com/jiage/1-0-130699.html';
    }else{
        url = `http://www.zyctd.com/jiage/1-0-130699-${id}.html`;
    }
    superagent.get(url)
        .end(function (err, sres) {
            if (err) {
                return next(err);
            }
            var $ = cheerio.load(sres.text);
            var items = [];
            $(".priceTable .priceTableRows li").each(function(idx,element){
                items.push({
                    name:$(element).children('.w1').text(),
                    specification:$(element).children('.w2').text(),
                    bazaar:$(element).children('.w9').text(),
                    newPrice:$(element).children('.w3').text(),
                    weekChange:$(element).children('.w5').text(),
                    monthChange:$(element).children('.w6').text(),
                    yearChange:$(element).children('.w7').text(),
                })
            });
            res.json(items); 
        })
});

//玉林药市
app.get('/yulin/:id',function(req,res,next){
    var id  = req.params.id;
    var url = null;
    if(id === 1){
        url = 'http://www.zyctd.com/jiage/1-0-450999.html';
    }else{
        url = `http://www.zyctd.com/jiage/1-0-450999-${id}.html`;
    }
    superagent.get(url)
        .end(function (err, sres) {
            if (err) {
                return next(err);
            }
            var $ = cheerio.load(sres.text);
            var items = [];
            $(".priceTable .priceTableRows li").each(function(idx,element){
                items.push({
                    name:$(element).children('.w1').text(),
                    specification:$(element).children('.w2').text(),
                    bazaar:$(element).children('.w9').text(),
                    newPrice:$(element).children('.w3').text(),
                    weekChange:$(element).children('.w5').text(),
                    monthChange:$(element).children('.w6').text(),
                    yearChange:$(element).children('.w7').text(),
                })
            });
            res.json(items); 
        })
});


//荷花池药市
app.get('/hehuachi/:id',function(req,res,next){
    var id  = req.params.id;
    var url = null;
    if(id === 1){
        url = 'http://www.zyctd.com/jiage/1-0-510199.html';
    }else{
        url = `http://www.zyctd.com/jiage/1-0-510199-${id}.html`;
    }
    superagent.get(url)
        .end(function (err, sres) {
            if (err) {
                return next(err);
            }
            var $ = cheerio.load(sres.text);
            var items = [];
            $(".priceTable .priceTableRows li").each(function(idx,element){
                items.push({
                    name:$(element).children('.w1').text(),
                    specification:$(element).children('.w2').text(),
                    bazaar:$(element).children('.w9').text(),
                    newPrice:$(element).children('.w3').text(),
                    weekChange:$(element).children('.w5').text(),
                    monthChange:$(element).children('.w6').text(),
                    yearChange:$(element).children('.w7').text(),
                })
            });
            res.json(items); 
        })
});



app.listen(3000);