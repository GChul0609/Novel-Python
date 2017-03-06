1、装node，CMD输入node -v出现4.5.0代表安装成功
2、装express cmd
    输入node install -g express-generator
    输入express -V 出现4.13.4代表安装成功
3、新建项目
    在任意目录按住shift+鼠标右键调出命令行
    输入express
    目录中出现一大堆文件代表成功
4、安装依赖包
    执行命令npm install
    网速好时执行，不好时直接拷贝
    出现node_modules目录，
    并且其中文件夹数量和package.json一致代表成功
5、安装ejs
    执行命令npm install ejs
    修改package.json，将jade替换为"ejs":"*"
    删除node_modules下的jade目录
    修改app.js  15行为app.set('view engine', 'ejs');
    注释掉第9，26行
    删除views目录下所有文件，不要删除目录
    在views下新建index.ejs文件，并写入网页基本结构
6、运行
    执行 npm start
    浏览器访问地址http://localhost:3000

如果链接mongodb数据库
1、运行mongodb   mongod -dbpath d:\mongodb\data
2、链接数据库   在bin目录下另外运行一个命令行，输入mongo
3、创建/选择数据库 use 数据库名  例子:use novel
4、安装Node对于mongodb的支持模块，mongodb,monk
    npm install mongodb
    npm install monk
5、在package.json中引入上述两个包
6、新建install.js，在app.js中引入该模块，并设置路由
    use novel
    db.createCollection('')
    db.admins.find()
7、删除数据库 db.admins.remove({})

use novel
db.novels.find({},{name:1})
db.novels.count()

正式建站：
删除public下所有目录，新建lib文件夹，将jeasyui文件夹复制到lib目录下
public下新建目录admin，admin目录下新建login.html
引入：
<link rel="stylesheet" href="../lib/jquery-easyui-1.5/themes/default/easyui.css"/>
<link rel="stylesheet" href="../lib/jquery-easyui-1.5/themes/icon.css"/>
<script src="../lib/jquery-easyui-1.5/jquery.min.js"></script>
<script src="../lib/jquery-easyui-1.5/jquery.easyui.min.js"></script>
<script src="../lib/jquery-easyui-1.5/locale/easyui-lang-zh_CN.js"></script>

三层开发模式：
数据(db.js)，逻辑(index.js)，表现层(index.ejs)

创建索引，凡是用于sort排序的子段，以及被搜索的字段都要创建索引
db.novels.ensureIndex({lastUpdateTime:-1})
