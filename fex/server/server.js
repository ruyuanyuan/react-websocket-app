const express = require('express')
const mongoose=require('mongoose')

const app =new express();
const DB_URL= "mongodb://127.0.0.1:27017/imooc"
mongoose.connect(DB_URL);
mongoose.connection.on("connected",function(err,db){
    if(!err){
        console.log('数据库链接成功')
    }else{
        console.log('数据库链接失败')
    }
})
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}

}))
// User.create({
//     user:'茹园园',
//     age:25
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

// User.remove({age:18},function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
// User.update({age:18},{$set:{user:'茹园园'}},function(err,doc){
//          if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//      }
// })
app.get('/',function(req,res){
    res.send('<h1>你好</h1>')
})

app.get('/data',function(req,res){

    User.findOne({user:'茹园园'},function(err,doc){
        if(!err){
            res.json(doc)
        }else{
            res.send(err)
        }
    })
    
    
})

app.listen('9090',function(){
    console.log('node 服务器已启动')
})