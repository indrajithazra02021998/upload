var express=require('express');
var app=express();
var path=require('path');
var http=require('http').Server(app);
var io=require('socket.io')(http);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.listen(7000,()=>console.log('server is running...'))
io.on('connection',(socket)=>{
    console.log('connection is made..')
})