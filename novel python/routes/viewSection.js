/**
 * Created by lenovo on 2017-01-13.
 */
var express = require('express');
var router = express.Router();
var db=require('../lib/db');
var mongodb=require('mongodb');
var novelThief=require('../lib/novelThief');
/* GET home page. */
router.get('/', function(req, res, next) {
    try{
        //接收客户端参数数据
        var id=new mongodb.ObjectId(req.query.id);
        var index=parseInt(req.query.index||0);
        console.log(index);
        //查询小说内容
        db.find('novels',{_id:id},{},function(err,cols){
            if(cols.length<=0){
                res.send('小说不存在');
            }else{
                //还得查询章节具体内容
                //小说内容对象如下
                //{_id:1,novelid:'abcdefg',index:0,content:''}
                //查询章节具体内容
                var novel=cols[0];
                db.find('sections',{novelid:req.query.id,index:index},{},function(err,cols){
                    if(cols.length<=0){//是否需要去偷数据
                        //准备偷取数据
                        var sourceUrl=novel.sections[index].sourceUrl;
                        console.log('正在抓取章节：'+sourceUrl);
                        novelThief.getSection(sourceUrl,function(content){
                            res.render('viewsection', {novel:novel,content:content});
                            db.insert('sections',{novelid:req.query.id,index:index,content:content});
                        });
                    }else{
                        //如果数据库中已经偷取到了章节内容，则直接从数据库中读取
                        res.render('viewsection', {novel:novel,index:index,content:cols[0].content});
                    }
                });

            }
        });
    }catch(ex){
        res.send('非法参数'+ex.message);
    }

});

module.exports = router;
