var express = require('express');
var path = require('path');
var fs = require('fs');
var moment = require('moment');
var proxy = require('proxy-middleware');
var app = express();
app.set('port', process.env.PORT || 8080);

app.use('/dist', express.static(path.join(__dirname, 'dist')));


/**
 * 鹏飞todo
 * npm run build  构建
 * node webpack-dev-express 运行本地node服务
 *
 * 反代已经处理好了;
 * 你帮我加入热加载中间件，编辑保存后可实时更新即可；
 */


//本地反代配置，线上用ngnix反代；我知道你想动这里，不用动，我会引入config做环境适配的,哈哈蛤
app.use('/api/social/iVoteService/getVoteDetail', proxy('http://dev.social-api.hd/social/vote/getVoteDetail'));


app.get('*',(req, res, next) => {
    //输出index.html ,任意地址都指向html文件
    var html = fs.readFile(path.join(__dirname, 'index.html'), function (err, data) {
        if (err) {
            next(err);
        } else {
            res.header("Content-Type", "text/html");
            res.status(200).send(data);
        }
    })
});

/* Server debug*/
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

/*404 debug*/
app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

server = app.listen(app.get('port'), function () {
    console.log('%s Listening on port %d', moment().format('YYYY-MM-DD HH:mm:ss'), server.address().port);
});

module.exports = app;