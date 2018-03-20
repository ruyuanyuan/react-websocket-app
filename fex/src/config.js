import axios from "axios"
import { Toast } from "antd-mobile"
import { setTimeout } from "timers";

// 拦截请求
axios.interceptors.request.use(config => {
    Toast.loading('加载中',0)
    return config
})

// 拦截响应
axios.interceptors.response.use(config => {
    setTimeout(()=>{
        Toast.hide()
    },200)
   
    return config
})