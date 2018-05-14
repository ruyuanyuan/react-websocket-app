import React from 'react'
import {NavBar,InputItem,WhiteSpace,TextareaItem,Button} from 'antd-mobile'
import AvatarSelector from '../../component/AvatarSelector/AvatarSelector.js'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {update} from '../../redux/user.redux'
@connect(
    state=>state.user,
    {update}
)
class bossinfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            desc:'',
            avatar:'',  
            company:'',
            money:''
        }
    }
    onChange(key,val){
        this.setState({
           [key]:val 
        })
    }
    render(){
        const path=this.props.location.pathname;
        const redirect=this.props.redirectTo
         return (
             <div>
                  {redirect&&path!=redirect?<Redirect to={this.props.redirectTo} />:null}
                 <NavBar mode="dark">BOSS 完善信息</NavBar>
                 <WhiteSpace/>
                 <AvatarSelector selectAvatar={(imagename)=>{
                     this.setState({
                         avatar:imagename
                     })
                 }}></AvatarSelector>
                 <WhiteSpace/>
                 <InputItem onChange={(v)=>this.onChange('title',v)}>招聘职位</InputItem>
                 <WhiteSpace/>
                 <InputItem onChange={(v)=>this.onChange('company',v)}>公司名称</InputItem> 
                 <WhiteSpace/>
                 <InputItem onChange={(v)=>this.onChange('money',v)}>职位薪资</InputItem>
                 <WhiteSpace/>
                 <TextareaItem title="职位要求" rows={3} autoHeight onChange={(v)=>this.onChange('desc',v)}></TextareaItem> 
                 <WhiteSpace/> 
                 <Button type='primary' onClick={()=>{
                     this.props.update(this.state)
                 }}>保存</Button>       
             </div>
         )
    }  
}

export default bossinfo;