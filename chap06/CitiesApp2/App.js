/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {  
  View,
  Text,
} from 'react-native';

import Tabs from './src'

export default class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Tabs/>
    )
  }
}
