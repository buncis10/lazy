import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchMessages, saveMessage, addMessage } from '../actions';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with ',
  };

  componentDidMount() {
    this.props.fetchMessages();
    this.notificationListener = FCM.on(FCMEvent.Notification, (notif) => {
      // console.log(notif)
      this.props.addMessage(JSON.parse(notif.message))
    });
  }
  
  componentWillUnmount() {
    this.notificationListener.remove();
  }

  render() {
    return (
        <GiftedChat
          messages={this.props.messages}
          onSend={(messages) => this.props.saveMessage(messages[0].text)}
          user={{
            _id: this.props.id
          }}
        />
    );
  }
}

function mapStateToProps(state,props) {
  return {
    id: state.account.account.id,
    messages: state.messages
  }
}

export default connect(mapStateToProps, { addMessage, fetchMessages, saveMessage })(ChatScreen);
