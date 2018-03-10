import React from 'react'
import {connect} from 'react-redux'
import {addGun,delGun,addGunAsync} from './index.redux'


// const mapStatetoProps=(state)=>{
//     return {num:state}
// };
// const actionCreators={addGun,delGun,addGunAsync};
// App=connect(mapStatetoProps,actionCreators)(App)
@connect(
    state=>{num:state},
    {addGun,delGun,addGunAsync}
)

class App extends React.Component{
    render(){
        const num =this.props.num;
        const addGun=this.props.addGun;
        const delGun=this.props.delGun;
        const addGunAsync=this.props.addGunAsync;
        return(
            <div>
                <h1>现在有机枪{num}把</h1>
                <button onClick={addGun}>加机关枪</button>
                <button onClick={delGun}>减机关枪</button>
                <button onClick={addGunAsync}>有货再给</button>
            </div>
            
        )
    }
}


export default App