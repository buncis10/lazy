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
    FCM.requestPermissions(); // for iOS
    FCM.getFCMToken().then(token => {
        console.log(token)
        // store fcm token in your server
    });
    
    this.notificationListener = FCM.on(FCMEvent.Notification, (notif) => {
        // do some component related stuff
        console.log("notif masuk")
        console.log(notif)
    });
  }

  componentWillUnmount() {
      // stop listening for events
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
