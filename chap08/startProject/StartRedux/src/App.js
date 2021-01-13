import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'
import {Provider} from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './redux/rootReducer'

const store = createStore(rootReducer)

export default class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <MyView/>
            </Provider>
        )
    }
}