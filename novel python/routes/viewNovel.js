/**
 * Created by lenovo on 2017-01-13.
 */
var express = require('express');
var router = express.Router();
var db = require('../lib/db');
var mongodb = require('mongodb');
/* GET home page. */
router.get('/', function(req, res, next) {
    //var ObjectId=mongodb.ObjectId;
    try{
        var id=new mongodb.ObjectId(req.query.id);
        db.find('novels',{_id:id},{},function(err,cols){
            if(cols.length<=0){
                res.send('小说不存在');
            }else{
                res.render('viewnovel', {data:cols[0]});
            }
        });
    }catch(ex){
        res.send('非法参数');
    };
});

module.exports = router;