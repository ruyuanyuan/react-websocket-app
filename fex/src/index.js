import React from "react"
import ReactDom from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
// import {counter} from './redux'
import reducers from './reducer'
import Auth from './Auth'
import Brower from './Brower'
const store=createStore(reducers,
    compose(applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension:f=>f
))
    // 登录控制
    //     未登录，跳转至登录
    // 登录跳转至相应页面    

    ReactDom.render(
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/login'  component={Auth}></Route>
                        <Route path='/brower'  component={Brower}></Route>
                        <Redirect to='/brower'></Redirect>
                    </Switch>
                   
                   
                </div>
            </BrowserRouter> 
        </Provider>
    ,
    document.getElementById('root'))

