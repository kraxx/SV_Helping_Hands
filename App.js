import React, { Component } from 'react';
import { createStore } from 'redux';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import AppReducer from './src/reducers';
import MapScreen from './src/components/MapScreen';

const store = createStore(AppReducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MapScreen />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('rntesting', () => App);