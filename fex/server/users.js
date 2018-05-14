const express = require('express')
const utils = require('utility');
const Router = express.Router()
const Model = require('./model')
const User = Model.getModel('user')
const Chat =  Model.getModel('chat')
const _filter={'pwd':0,'__v':0}
Router.get('/info', function (req, res) {
    const { userid } = req.cookies

    if (!userid) {
        return res.json({ code: 1 })
    }
    User.findOne({_id:userid},_filter,function(err,doc){
        if(err){
            return res.json({ code: 1 ,msg:'后端查询出错了'})
        }
        if(doc){
            return res.json({ code: 0 ,data:doc})
        }
    })
})
Router.get('/getmsglist',function(req,res){
    const user=req.cookies.userid;
    // {'$or':[{'from':user,'to':user}]}
    Chat.find({},function(err,doc){
        if(!err){
            return res.json({code:0,msgs:doc})
        }    
    })
})
// 调试列表
Router.get('/list', function (req, res) {
    const {type}=req.query;
    // User.remove({},function(e,d){})
    User.find({type}, function (err, doc) {
        return res.json({code:0,data:doc});
    })
})
Router.post('/update',function(req,res){

    const  userid  = req.cookies.userid
    if(!userid){
      return res.json({ code: 1})
    }
    const body=req.body;

    User.findByIdAndUpdate(userid,body,function(err,doc){
        const data=Object.assign({},{
            user:doc.user,
            type:doc.type,
        },body)
        return res.json({code:0,data})
    })
})
// 登录
Router.post('/login', function (req, res) {
    const { user, pwd } = req.body;
    User.findOne({ user, pwd: makemd5(pwd) }, _filter, function (err, doc) {
        if (!doc) {
            res.json({ code: 1, msg: '用户名不存在或者密码错误！' })
        }
        res.cookie('userid', doc._id)
        return res.json({ code: 0, data: doc })

    })
})
//注册
Router.post('/register', function (req, res) {
    const { user, pwd, type } = req.body;
    User.findOne({ user }, function (err, doc) {
        if (doc) {
            return res.json({ code: 1, msg: '用户名重复' })
        }
        const userModel=new User({ user, type, pwd: makemd5(pwd) })
        userModel.save(function(e,d){
            if(e){
                return res.json({ code: 1, msg: '创建中用户出现错误' }) 
            }
            const {user,type,_id} =d
            res.cookie('userid',_id)
            return res.json({ code: 0,data:{user,type,_id}, msg: "注册成功" })
        })
        // User.create({ user, type, pwd: makemd5(pwd) }, function (err, doc) {
        //     if (err) {
        //         return res.json({ code: 1, msg: '创建中用户出现错误' })
        //     }
        //     return res.json({ code: 0, msg: "注册成功" })
        // })
    })
})

function makemd5(pwd) {
    const salt = '!@#$%%^%$$#@!'
    return utils.md5(utils.md5(pwd + salt));
}
module.exports = Router