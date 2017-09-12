import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, ActivityIndicator } from 'react-native';

export default class IntroScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with ',
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    return fetch('http://192.168.0.19:3000/conversations/2', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": "user@user.com",
        "X-user-token": "BmvMcdLNyv1XsRgMb7dw"
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          messages: responseJson.messages
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
        <GiftedChat
          messages={this.state.messages}
          onSend={() => console.log("adb")}
          user={{
            _id: 1,
          }}
        />
    );
  }
}
