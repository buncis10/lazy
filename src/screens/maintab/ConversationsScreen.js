import React from 'react';
import { FlatList, ActivityIndicator, Button } from 'react-native';
import { TouchableOpacity, Text, View, Row, Image, Subtitle } from '@shoutem/ui'
import Icon from 'react-native-vector-icons/MaterialIcons';
import BelomLogin from '../authentication/BelomLogin'
import ConversationList from '../list/ConversationList'

export default class ConversationsScreen extends React.Component {
  static navigationOptions = {
    title: 'Lazy',
    tabBarLabel: ({ tintColor }) => (<Text style={{color: tintColor}}>Teman</Text>),
    tabBarIcon: ({ tintColor }) => (<Icon size={18} 
                          color={tintColor}  
                          name="chat" />)
  }

  render() {
    if (false) {
      return (
        <ConversationList/>
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
