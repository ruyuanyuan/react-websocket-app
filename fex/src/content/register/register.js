import React from  'react'
import {List,InputItem,WhiteSpace,WingBlank,Button,Radio} from 'antd-mobile'
import Logo from '../../component/logo/logo'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {register} from '../../redux/user.redux'
import userFrom from '../../component/userfrom/userfrom'
@connect(
    state=>state.user,
    {register}
)
@userFrom

class Register extends React.Component{
    constructor(props){
        super(props)
        // this.state={
        //     redirectTo:'',
        //    user:'',
        //    pwd:'',
        //    repeatpwd:'',
        //    type:'genius'//牛人
        // }
        this.handleRegister=this.handleRegister.bind(this)
    }
    // handleChane(key,val){
    //     this.setState({
    //         [key]:val
    //     })
    // }
    
    componentDidMount() {
        this.props.handleChane('type','genius')
    }
    
    handleRegister(){
        this.props.register(this.props.state)
    }
    render(){
        const RadioItem=Radio.RadioItem;
        return(
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
                <Logo></Logo>
                <WingBlank>
                    {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}   
                    <List>
                        <InputItem 
                        onChange={v=>this.props.handleChane('user',v)}
                        >用户</InputItem>
                        <WhiteSpace/>
                        <InputItem 
                        type='password'
                        onChange={v=>this.props.handleChane('pwd',v)}
                        >密码</InputItem>
                        <WhiteSpace/>
                        <InputItem 
                        type='password'
                        onChange={v=>this.props.handleChane('repeatpwd',v)}
                        >确认密码</InputItem>
                        <WhiteSpace/>
                        <RadioItem
                         checked={this.props.state.type==='genius'}
                         onChange={()=>this.props.handleChane('type','genius')}
                         >
                            牛人
                        </RadioItem>
                        <RadioItem 
                        checked={this.props.state.type==='boss'}
                        onChange={()=>this.props.handleChane('type','boss')}
                        >
                            BOSS
                        </RadioItem>
                    </List>
                    
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                 </WingBlank>   
            </div>
        )
    }
}

export default Register;