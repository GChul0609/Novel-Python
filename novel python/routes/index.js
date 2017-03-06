var express = require('express'); //如果 X 是内置模块（比如 require('http'）) a. 返回该模块;  b. 不再继续执行。
var router = express.Router();
var db=require('../lib/db') //如果 X 以 "./" 或者 "/" 或者 "../" 开头；根据 X 所在的父模块，确定 X 的绝对路径。

/* GET home page. */
//req:  require  模块通过它加载
//res:  Response对象用于动态响应客户端请示，控制发送给用户的信息，并将动态生成响应
router.get('/', function(req, res, next) {
    var page=new Number(req.query.page||1);
    var rows=12; //每页显示多少条数据
    var searchTxt=req.query.searchTxt||'';
    var reg=new RegExp('.*'+searchTxt+'.*');
    var category =req.query.category||'';  //接收前端传过来的category参数
    var regCategory=new RegExp(category);  //根据正则分类
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
                res.render('index',{searchTxt:searchTxt,category:category,isNextPage:isNextPage,page:page,rows:cols});  //cols 是数组
            }
        );
    });
});

module.exports = router;
