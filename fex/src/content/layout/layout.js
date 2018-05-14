import React from 'react';
import {connect} from 'react-redux'
import { NavBar, Icon } from 'antd-mobile';
import {Switch,Route} from 'react-router-dom'
import NavlinkBar from '../../component/navlinkbar/navlinkbar'
import Boss from '../boss/boss'
import Genius from '../genius/genius'
import Msg from '../msg/msg'
import Me from '../me/me'
@connect(
    state=>state
)
class Layout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const pathname=this.props.location.pathname
        const user=this.props.user;
        const navList=[
            {
                path:'/boss',
                text:'牛人',
                icon:'genius',
                title:'牛人列表',
                component:Boss,
                hide:user.type=='genius'
    
            },
            {
                path:'/genius',
                text:'牛人',
                icon:'boss',
                title:'BOSS列表',
                component:Genius,
                hide:user.type=='boss'
    
            },
            {
                path:'/msg',
                text:'消息',
                icon:'msg',
                title:'消息列表',
                component:Msg
            },
            {
                path:'/me',
                text:'我',
                icon:'me',
                title:'个人中心',
                component:Me
            },
        ]
        return (
            navList.find(v=>v.path==pathname)?<div>
                <NavBar className='fixed-header' mode='dard'>{navList.find(v=>v.path==pathname).title}</NavBar>
                <div style={{marginTop:45}}>
                <Switch>
                    {navList.map(v=>(
                        <Route key={v.path} path={v.path}  component={v.component}></Route>
                    ))}
                     
                </Switch>
                </div>
                <NavlinkBar data={navList}></NavlinkBar>
            </div>:null
        )
    }
}

export default Layout;