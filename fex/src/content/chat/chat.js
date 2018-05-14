import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import io from 'socket.io-client'
import {List,InputItem} from 'antd-mobile'
import {getMsgList} from '../../redux/chat.redux'
import { ENGINE_METHOD_CIPHERS } from 'constants';
const socket=io('ws://localhost:9090')
@connect(
    state=>state.chat,
    {getMsgList}
)
@withRouter
class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state={
            text:'',
            msg:[]
        }
    }
    componentDidMount(){
        this.props.getMsgList()
        // socket.on('recvmsg',(data)=>{
        //     this.setState({
        //         msg:[...this.state.msg,data.text]
        //     })
        // }) 
    }
    handleSubmit(){
        // socket.emit('sendmsg',{text:this.state.text})
        const from =this.props.user._id
        const to =this.props.match.params.user
        this.setState({text:''})
    }
    render(){
        return (
            <div>
                {this.state.msg.map(v=>{
                    return <p key={v}>{v}</p>
                })}
                <div className="stick-footer">
                    <List>
                        <InputItem 
                        placegolder='请输入'
                        value={this.state.text}
                        onChange={v=>{
                            this.setState({text:v})
                        }}
                        extra={<span onClick={()=>this.handleSubmit()}>发送</span>}
                        ></InputItem>       
                    </List>
                
                </div>
            </div>
        )
    }
}

export default Chat