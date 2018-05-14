 import React from 'react'
 export default function userForm(Comp){
    return class WrapperComp extends React.Component{
        constructor(props){
            super(props)
            this.state={}
            this.handleChane=this.handleChane.bind(this)
        }
        handleChane(key,val){
            this.setState({
                [key]:val
            })
        }
        render(){
            return <Comp handleChane={this.handleChane} state={this.state} {...this.props}></Comp>
        }
    }
 }