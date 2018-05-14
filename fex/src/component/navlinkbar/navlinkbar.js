import React from 'react'
import {connect} from 'react-redux'
import { TabBar } from 'antd-mobile';
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
@connect(
    state=>state
)
@withRouter
class NavLinkBar extends React.Component{
    static propTypes ={
        selectAvatar:PropTypes.func
    }
    constructor(props){
        super(props)
    }
    render(){
        
        const navLink =this.props.data.filter(v=>!v.hide)
        const pathname=this.props.location.pathname;
        return (
            <TabBar>
               {navLink.map(v=>(
                   <TabBar.Item
                   key={v.path}
                   title={v.text}
                   icon={{uri:require(`./img/${v.icon}.svg`)}}
                   selectedIcon={{uri:require(`./img/${v.icon}_active.svg`)}}
                   selected={pathname===v.path}
                    onPress={()=>{
                        this.props.history.push(v.path)
                    }}
                   >
                   </TabBar.Item>    
               ))} 
            </TabBar>
        )
    }
}

export default NavLinkBar;