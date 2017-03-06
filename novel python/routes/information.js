/**
 * Created by lenovo on 2017-01-09.
 */
var express = require('express');
var router = express.Router();
var mongodb=require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
    //增加数据
    //连接数据库
    var server = new mongodb.Server("127.0.0.1",27017,{});
    var db=new mongodb.Db('novel',server,{})
    db.open(function(error,db){//数据库：mongotest
        if(error) throw error;
        db.collection('information',{safe:true}, function(err, collection){
            if(err){
                console.log(err);
            }else{
//                collection.insert([{
//                    name:'凌娟',
//                    sex:'女',
//                    loginId:'lingJuan',
//                    loginPass:'8888',
//                    hh:'<br/>'
//                },
//                    {
//                        name:'周佳萍',
//                        sex:'女',
//                        loginId:'zhouJiaPing',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'王伟',
//                        sex:'男',
//                        loginId:'wangWei',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'陈特良',
//                        sex:'男',
//                        loginId:'chenTeLiang',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'汤诗强',
//                        sex:'男',
//                        loginId:'tangShiQiang',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'黄露露',
//                        sex:'女',
//                        loginId:'huangLuLu',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'杨宏静',
//                        sex:'男',
//                        loginId:'yangHongJing',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'王正康',
//                        sex:'男',
//                        loginId:'wangZhengKang',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//
//                    {
//                        name:'张煜霖',
//                        sex:'男',
//                        loginId:'zhangYuLin',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'顾明意',
//                        sex:'男',
//                        loginId:'guMingYi',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'吴莎',
//                        sex:'女',
//                        loginId:'wuSha',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'刘煌',
//                        sex:'男',
//                        loginId:'liuHuang',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'余莉莎',
//                        sex:'女',
//                        loginId:'yuLiSha',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//
//                    {
//                        name:'杨倩',
//                        sex:'女',
//                        loginId:'yangQian',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'漆俊霞',
//                        sex:'女',
//                        loginId:'qiJunXia',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'彭艳',
//                        sex:'女',
//                        loginId:'pengYan',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'黄莉华',
//                        sex:'女',
//                        loginId:'huangLiHua',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'马浪浪',
//                        sex:'男',
//                        loginId:'maLangLang',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'孙少博',
//                        sex:'男',
//                        loginId:'sunShaoBo',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'李金金',
//                        sex:'女',
//                        loginId:'liJinJin',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'周翔',
//                        sex:'男',
//                        loginId:'zhouXiang',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'刘芬',
//                        sex:'女',
//                        loginId:'liuFen',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'欧益华',
//                        sex:'男',
//                        loginId:'ouYiHua',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                        name:'谭吉林',
//                        sex:'男',
//                        loginId:'tanJiLin',
//                        loginPass:'8888',
//                        hh:'<br/>'
//                    },
//                    {
//                       name:'向兴万',
//                        sex:'男',
//                       loginId:'xiangXingWan',
//                       loginPass:'8888',
//                        hh:'<br/>'
//                    }]);


                //增
                var ObjectID = require('mongodb').ObjectID;
                collection.find().toArray(function(errfind,cols){
                    res.send(JSON.stringify(cols));
                });



            }
        });
    });
    // res.send('安装成功');
});

module.exports = router;