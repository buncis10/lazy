import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigators/AppNavigator';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reducers from './src/reducers/index'; 
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';   
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default class App extends React.Component {
  componentDidMount() {
    FCM.getFCMToken().then(token => {
        console.log(token)
        // store fcm token in your server
    });
    
    this.notificationListener = FCM.on(FCMEvent.Notification, (notif) => {
        console.log(notif)
    });
  }

  componentWillUnmount() {
    this.notificationListener.remove();
  }

  render() {
    return (
      <Provider store ={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}
