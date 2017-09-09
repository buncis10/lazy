import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigators/AppNavigator';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reducers from './src/reducers/index'; 
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default class App extends React.Component {

  render() {
    return (
      <Provider store ={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}
