import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { NavBar, Icon } from 'antd-mobile';
import {getUserList} from '../../redux/chatuser.redux'
import UserCard from '../../component/usercard/usercard'
import NavlinkBar from '../../component/navlinkbar/navlinkbar'
@connect(
    state=>state.chatuser,
    {getUserList}
   )
class Genius extends React.Component{
    componentDidMount() {
        this.props.getUserList('boss') 
     }
    render(){
       
        return (
            <div>
                <UserCard userlist={this.props.userlist}></UserCard>
            </div>    
        )
    }
}

export default Genius;