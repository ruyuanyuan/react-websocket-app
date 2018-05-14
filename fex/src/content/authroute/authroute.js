import React from "react"
import axios from "axios"
import { withRouter } from 'react-router-dom'
import {loadData} from '../../redux/user.redux'
import {connect} from 'react-redux'
@withRouter

@connect(
    null,
    {loadData}
)
class AuthRoute extends React.Component{
    componentDidMount(){
        // 获取用户信息
        const publicRoute=['/login','/register']
        const pathname=this.props.location.pathname
        if(publicRoute.indexOf(pathname)>-1){
            return false;
        }
        if(pathname=='/'){
            this.props.history.push('/login')
        }
        console.log(pathname)
        axios.get('/user/info').then(res=>{
            if(res.status===200){
                if(res.data.code==0){
                    this.props.loadData(res.data.data)
                }else{
                    this.props.history.push('/login')
                }
            }
        })
    }
    render(){
        return(
            <div></div>
        )
    }
}
export default AuthRoute;