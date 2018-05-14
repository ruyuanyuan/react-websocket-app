import React from "react"
import ReactDom from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import './config'
import reducers from './reducer'

import Login from './content/login/login'
import Register from './content/register/register'
import AuthRoute from './content/authroute/authroute'
import BossInfo from './content/bossinfo/bossinfo'
import GeniusInfo from './content/geniusinfo/geniusinfo'
import Layout from './content/layout/layout'
import Chat from './content/chat/chat'
import './index.css'
const store=createStore( reducers ,
    compose(applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))
    // 登录控制
    //     未登录，跳转至登录
    // 登录跳转至相应页面    

    ReactDom.render(
        <Provider store={store}>
            <BrowserRouter>
                <div>
                        <AuthRoute></AuthRoute>
                        <Switch>
                            <Route path='/bossinfo' component={BossInfo}></Route>
                            <Route path='/geniusinfo' component={GeniusInfo}></Route>
                            <Route path='/login' component={Login}></Route>
                            <Route path='/register' component={Register}></Route>
                            <Route path='/chat/:user' component={Chat}></Route>
                            <Route   component={Layout}></Route>
                        </Switch>
                        
                </div>
            </BrowserRouter> 
        </Provider>
    ,
    document.getElementById('root'))

