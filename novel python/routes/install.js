/**
 * Created by Administrator on 2017/1/9.
 */
var express = require('express');
var router = express.Router();
//var mongodb = require('mongodb');
var db = require('../lib/db');//引入
/* GET home page. */
router.get('/', function(req, res, next) {
    //增加数据
    //连接数据库
//    var server = new mongodb.Server("127.0.0.1",27017,{});
//    var db=new mongodb.Db('novel',server,{})
//    db.open(function(error,db){//数据库：mongotest
//        if(error) throw error;
//        db.collection('admins1',{safe:true},sort({_id:-1}), function(err, collection){  //collection数据集合  有就调用，没有就创建
//            if(err){
//                console.log(err);
//            }else{
                //增
//                collection.insert({
//                    loginId:'admin2',
//                    loginPass:'123456'
//                });
//                var ObjectID = require('mongodb').ObjectID;
//                //查
//                collection.find({loginId:'admin2'}).toArray(function(errfind,cols){
//                    res.send(JSON.stringify(cols));
//                });
//                collection.find({_id:ObjectID('587348e5982a8e09900e587f'),loginId:'admin2'}).toArray(function(errfind,cols){
//                    res.send(JSON.stringify(cols));
//                });
                //改
//                collection.update(
//                    {_id:ObjectID('587348e5982a8e09900e587f')},
//                    {
//                        loginId:'admin888',
//                        loginPass:'654321'
//                    }
//                );
//                collection.find().toArray(function(errfind,cols){
//                    res.send(JSON.stringify(cols));
//                });
                //删
                //collection.remove({_id:ObjectID('587348fc982a8e09900e588c')});
                //模糊查询:正则，字符串
                //分页查询：.limit(3).skip(3)
//                collection.find({loginId:{$regex:/.*2.*/i}}).limit(3).skip(3).toArray(function(errfind,cols){
//                    res.send(JSON.stringify(cols));
//                });
//            }
//        });
//    });
    //res.send('安装成功');


    //用自定义模块db.js
//    db.find('admins',{loginId:{$regex:'admin2'}},{sort:{_id:-1},limit:5,skip:2},function(err,cols){
//        res.send(JSON.stringify(cols));
//    });
    db.remove('admins',{},function(){

    });
    db.insert('admins',{loginId:'admin',loginPass:'123456'},function(){
        res.send('初始化成功');
    });
});

module.exports = router;

