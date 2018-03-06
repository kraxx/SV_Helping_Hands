import React, { Component } from 'react';
import { createStore } from 'redux';
import { AppRegistry, View, Text } from 'react-native';
import { connect, Provider } from 'react-redux';
import AppReducer from './src/reducers';
import AppNavigation from './src/navigation'

let store = createStore(AppReducer);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('rntesting', () => App);
