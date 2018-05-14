const express = require('express')
const utils = require('utility')
const bodyParser=require('body-parser')
const CookieParser=require('cookie-parser')
const userRouter = require('./users')

const app =new express();

const server =require('http').Server(app)
const io =require('socket.io')(server)

io.on('connection',function(socket){
      socket.on('sendmsg',function(data){
          io.emit('recvmsg',data)
      })
})

app.use(CookieParser());
app.use(bodyParser.json());
app.use('/user',userRouter)
server.listen('9090',function(){
    console.log('node 服务器已启动')
})