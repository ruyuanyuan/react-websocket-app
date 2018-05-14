import React from 'react'
import Logo from '../../component/logo/logo'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {List,InputItem,WhiteSpace,WingBlank,Button} from 'antd-mobile'
import {login} from '../../redux/user.redux'
import userFrom from '../../component/userfrom/userfrom'

@connect(
    state=>state.user,
    {login}
)
@userFrom

class Login extends React.Component{
    constructor(props){
        super(props)
    
        this.register=this.register.bind(this)
        this.handlelogin=this.handlelogin.bind(this)
    }
    register(){
        this.props.history.push('/register')
    }

    handlelogin(){
        this.props.login(this.props.state)
    }
    // testalert(v){
    //     alert(v)
    // }
    render(){
        return(
            <div>
                {this.props.redirectTo&&this.props.redirectTo!='/login'?<Redirect to={this.props.redirectTo} />:null}
                <Logo></Logo>
                <WingBlank>
                {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                    <List>
                        <InputItem
                        onChange={v=>this.props.handleChane('user',v)}
                        >用户</InputItem>
                        <WhiteSpace/>
                        <InputItem
                        onChange={v=>this.props.handleChane('pwd',v)}
                        type='password'>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button onClick={this.handlelogin} type="primary">登录</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register}>注册</Button>
                    {/* <Button type="primary" onClick={v=>this.testalert(1233)}>測試</Button> */}
                 </WingBlank>   
            </div>

        )
    }
}

export default Login;