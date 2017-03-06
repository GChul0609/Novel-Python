/**
 * Created by lenovo on 2017-01-14.
 */
var express = require('express');
var router = express.Router();
var db=require('../lib/db')

/* GET home page. */
router.get('/', function(req, res, next) {
    var page=new Number(req.query.page||1);
    var rows=12; //每页显示多少条数据
    var searchTxt=req.query.searchTxt||'';
    var reg=new RegExp('.*'+searchTxt+'.*');
    var category =req.query.category||'';
    var regCategory=new RegExp(category);
    var query={name:reg,category:regCategory};
    //查询数据库中符合条件的记录数量
    db.count('novels',query,function(total){
        //判断是否需要下一页按钮
        var isNextPage=page*rows<total;
        db.find(
            'novels',
            query,
            { fields:   //数据库中是否有小说名等
            {name:1,author:1,description:1,imgUrl:1},
                sort:{
                    lastUpdateTime:-1
                },
                limit:rows,
                skip:(page-1)*rows
            },
            function(err,cols){
                //.render将数据绑定到ejs文件
                res.render('appindex',{searchTxt:searchTxt,category:category,isNextPage:isNextPage,page:page,rows:cols});  //cols 是数组
            }
        );
    });
});

module.exports = router;