import React from "react"
import ReactDom from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import App from "./App.js"
import {counter} from './redux'


const store=createStore(counter,
    compose(applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension:f=>f
))

function render(){
   
    ReactDom.render(
        <Provider store={store}>
             <App />   
        </Provider>
    ,
    document.getElementById('root'))
}
render()

store.subscribe(render)