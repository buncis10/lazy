import React from 'react';
import { FlatList, ActivityIndicator, Button } from 'react-native';
import { TouchableOpacity, Text, View, Row, Image, Subtitle } from '@shoutem/ui'
import Icon from 'react-native-vector-icons/MaterialIcons';
import BelomLogin from '../authentication/BelomLogin'
import ConversationsList from '../list/ConversationsList'
import { connect } from 'react-redux'

class ConversationsScreen extends React.Component {
  static navigationOptions = {
    title: 'Lazy',
    tabBarLabel: ({ tintColor }) => (<Text style={{color: tintColor}}>Chat</Text>),
    tabBarIcon: ({ tintColor }) => (<Icon size={18} 
                          color={tintColor}  
                          name="chat" />)
  }

  render() {
    if (this.props.isAuthenticated) {
      return (
        <Text>abcd</Text>
      );
    }

    return (
      <BelomLogin 
        onPressLogin={() => this.props.navigation.navigate("LoginScreen")}
        onPressRegister={() => this.props.navigation.navigate("RegisterScreen")}        
        title="Chatting"
        description="Halaman ini berisi pesan-pesan yang dikirimkan oleh teman kamu.
        Ingin mencoba chatting?
        Silahkan login dengan akun kamu terlebih dahulu."
      />
    );
  }
}

function mapStateToProps(state) {
  return {isAuthenticated: state.account.isAuthenticated}
}

export default connect(mapStateToProps)(ConversationsScreen);