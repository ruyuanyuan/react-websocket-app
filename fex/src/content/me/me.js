import React from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Button,Modal,NavBar,Icon} from 'antd-mobile'
import { logoutSubmit } from '../../redux/user.redux';
import BrowserCookies from 'browser-cookies'
import {Redirect} from 'react-router-dom'
import NavlinkBar from '../../component/navlinkbar/navlinkbar'
@connect(
    state => state.user,
    {logoutSubmit}
)
class Me extends React.Component {
    constructor(props) {
        super(props)
        this.logouts = this.logouts.bind(this)
    }
    logouts() {
        const alert=Modal.alert
        alert('注销','您确认退出吗？',[
            {text:'取消',onPress:()=>console.log('取消')},
            {text:'确认',onPress:()=>{
                 BrowserCookies.erase('userid')
                 this.props.logoutSubmit()
            }}
        ])
    }
    render() {
        const userinfo = this.props
        const Item = List.Item
        const Brief = Item.Brief
        const _this=this
        return (
            <div>
                    {userinfo.user ? (
                                    <div>
                                        <Result
                                            img={<img src={require(`../../component/img/${userinfo.avatar}.png`)} style={{ width: 50 }} alt='' />}
                                            title={userinfo.user}
                                            message={userinfo.type == 'boss' ? userinfo.company : null}
                                        />
                                        <List renderHeader={() => '简介'}>
                                            <Item
                                                multipleLine
                                            >
                                                {userinfo.title}
                                                {userinfo.desc.split('\n').map(v => (
                                                    <Brief key={v}>{v}</Brief>
                                                ))}
                                                {<Brief>薪资：{userinfo.money}</Brief>}

                                            </Item>
                                        </List>
                                        <WhiteSpace></WhiteSpace>
                                        <Button type="primary" onClick={this.logouts}>退出</Button>
                                    </div>
                            ) :null}
            </div>
        )
    }
}
export default Me;