/**
 * Created by lenovo on 2017-01-11.
 */
var express = require('express');
var router = express.Router();
var novelThief=require('../lib/novelThief');
/* GET home page. */
router.get('/', function(req, res, next) {
//    novelThief.getPageHtml('http://www.qu.la',function(){
//        res.send(data);
//    });

//    novelThief.getAllNovelUrl(function(arr){
//        res.send(arr.join('</br>'));
//    });

//    novelThief.getNovelInfo('http://www.qu.la/book/83/',function(novel){
//        res.send(JSON.stringify(novel));
//    });

    novelThief.getSection('http://www.qu.la/book/83/69739.html',function(content){
        res.send(content);
    });

});

module.exports = router;
