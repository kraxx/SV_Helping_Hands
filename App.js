import React from 'react';
import { createStore } from 'redux';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { connect, Provider } from 'react-redux';
import AppReducer from './src/reducers';
// import AppNavigation from './src/navigation';
import MapScreen from './src/components/MapScreen';

const store = createStore(AppReducer);

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <MapScreen />
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('rntesting', () => App);
