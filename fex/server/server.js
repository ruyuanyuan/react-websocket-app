const express = require('express')

const app =new express();

app.get('/',function(req,res){
    res.send('<h1>你好</h1>')
})

app.get('/data',function(req,res){
    res.json({name:'wolf fex',age:24})
})

app.listen('9090',function(){
    console.log('node 服务器已启动')
})