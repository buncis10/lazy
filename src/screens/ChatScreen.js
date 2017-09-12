import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchMessages, saveMessage } from '../actions';

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with ',
  };

  componentDidMount() {
    this.props.fetchMessages();
  }
  
  render() {
    return (
        <GiftedChat
          messages={this.props.messages}
          onSend={(messages) => this.props.saveMessage(messages[0].text)}
          user={{
            _id: 1,
          }}
        />
    );
  }
}

function mapStateToProps(state,props) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, { fetchMessages, saveMessage })(ChatScreen);