import React from 'react'
import PropTypes from 'prop-types'
import {Card,WhiteSpace,WingBlank} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
@withRouter
class UserCard extends React.Component{
    static propTypes ={
        userlist:PropTypes.array.isRequired
    }
    constructor(props){
        super(props);
        this.hanleclick=this.hanleclick.bind(this)
    }
    hanleclick(v){
        this.props.history.push(`/chat/${v._id}`)
    }
    render(){
        const Header=Card.Header
        const Body=Card.Body
        const _this=this
        return (
            <WingBlank>
            <WhiteSpace></WhiteSpace>
             {this.props.userlist.map(v=>(
                 v.avatar?(<Card 
                     key={v._id}
                    onClick={this.hanleclick.bind(this, v)}
                     >
                     <Header
                     title={v.user}
                     thumb={require(`../../component/img/${v.avatar}.png`)}
                     extra={<span>{v.title}</span>}
                     ></Header>
                     <Body>
                     {v.type=='boss'?<div>公司名称：{v.company}</div>:null}
                     {v.desc!=''?v.desc.split('\n').map(v=>(
                         <div key={v}>技能要求：{v}</div>
                     )):null}
                     <div>{v.type=='boss'?'职位薪资：':'期望薪资：'}{v.money}</div>
                     </Body>
                     
                     <WhiteSpace></WhiteSpace>
                 </Card>):null 
                 
             ))}
            
         </WingBlank>
        )
    }
}


export default UserCard;