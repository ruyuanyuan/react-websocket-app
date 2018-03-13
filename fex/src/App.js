import React from 'react'
import { connect } from 'react-redux';
import {addGun,delGun,addGunsettime} from './redux' ;

// const mapStatetoProps=(state)=>{
//     return {num:state}
// }
// const actionCreators={addGun,delGun,addGunsettime}

// App=connect(mapStatetoProps,actionCreators)(App)

@connect(
    state=>({num:state})
    ,{addGun,delGun,addGunsettime})

class App extends React.Component{
    render(){
       
        return(<div>
            <h1>现有机枪{this.props.num}把</h1>
            <button onClick={this.props.addGun}>申请机关枪</button>
            <button onClick={this.props.delGun}>上交机关枪</button>
            <button onClick={this.props.addGunsettime}>等两天</button>
        </div>)
    }
}

export default App;