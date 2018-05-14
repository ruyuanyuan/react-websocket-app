import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { NavBar, Icon } from 'antd-mobile';
import UserCard from '../../component/usercard/usercard'
import {getUserList} from '../../redux/chatuser.redux'
import NavlinkBar from '../../component/navlinkbar/navlinkbar'
@connect(
 state=>state.chatuser,
 {getUserList}
)

class Boss extends React.Component{
    constructor(props){
        super(props)
    }   
    componentDidMount() {
       this.props.getUserList('genius') 
    }
    
    render(){
    
        return (
            <div>
                <UserCard userlist={this.props.userlist}></UserCard>
            </div>
        )
    }
}

export default Boss;