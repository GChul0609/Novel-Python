/**
 * Created by lenovo on 2017-01-09.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('my', { name: '胡荣花',age:20,children:[{name:'***'}] });
});

module.exports = router;