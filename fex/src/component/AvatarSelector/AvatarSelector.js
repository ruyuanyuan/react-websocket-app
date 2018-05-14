import React from 'react'
import {Grid,List} from 'antd-mobile'
import PropTypes from 'prop-types'
class AvatarSelector extends React.Component{
    static propTypes ={
        selectAvatar:PropTypes.func
    }
    constructor(props){
        super(props)
        this.state={ }
    }
    render(){
        const avatarList='boy,girl,woman,man,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'.split(',')
                            .map(v=>({
                                icon:require(`../img/${v}.png`),
                                text:v
                            }))
        const gridHeader= this.state.icon?<div>
                                            <span>已选择头像</span>
                                            <img style={{width:24}} src={this.state.icon} />
                                          </div> :  <div>请选择头像</div>             
         return (
             <div>
                 <List renderHeader={()=>gridHeader}>
                 <Grid data={avatarList} 
                 onClick={(ele)=>{
                     this.setState(ele)
                     this.props.selectAvatar(ele.text)
                    }}
                 columnNum={5}  />
                 </List>
                
             </div>
         )
    }  
}

export default AvatarSelector;