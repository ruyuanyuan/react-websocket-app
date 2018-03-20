import React from 'react'
import {connect} from 'react-redux'
import {login,getUserData} from './Auth.redux'
import {Redirect} from 'react-router-dom'

@connect(
    state=>state.auth,
    {login,getUserData}
)

class Auth extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         data:{}
    //     }
       
    // }
    componentDidMount(){
        this.props.getUserData()
        // axios.get('/data').then(res=>{
        //     if(res.status==200){
        //         this.setState({data:res.data})
        //     }
        // })
    }
    render(){
        return (<div>
                <h1>我的名字是{this.props.user},年龄{this.props.age}</h1>
                {this.props.isAuth?<Redirect to='/brower'></Redirect>:null}
                  <h2>你没有权限，需要登录才可查看</h2>
                  <button onClick={this.props.login}>登录</button>
            </div>)
    }
}

export default Auth;