import React from 'react'
import {Link,Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {logout} from './Auth.redux'

import App from './App'
import One from './One'
import Tow from './Tow'


@connect(
    state=>state.auth,
    {logout}
)

class Brower extends React.Component{
   
    render(){
        const match=this.props.match;
        const redirectToLogin=(<Redirect to='/login'></Redirect>)
        const app=( <div>
                        <h1>独立团</h1>
                        <button onClick={this.props.logout}>注销</button>
                        <ul>
                            <li>
                                <Link to={`${match.url}/`}>主营</Link>
                            </li>
                            <li>
                                <Link to={`${match.url}/one`}>一营</Link>
                            </li>
                            <li>
                                <Link to={`${match.url}/tow`}>二营</Link>
                            </li>
                        </ul>
                        <Route  path={`${match.url}/`} exact component={App}></Route>
                        <Route  path={`${match.url}/one`} component={One}></Route>
                        <Route  path={`${match.url}/tow`}  component={Tow}></Route>
                  </div>)
        return this.props.isAuth? app :redirectToLogin
    }
}
export default Brower;