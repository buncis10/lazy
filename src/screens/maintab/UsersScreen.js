import React from 'react';
import { FlatList, ActivityIndicator, Button } from 'react-native';
import { TouchableOpacity, Text, View, Row, Image, Subtitle } from '@shoutem/ui'
import Icon from 'react-native-vector-icons/MaterialIcons';
import BelomLogin from '../authentication/BelomLogin'
import UsersList from '../list/UsersList'

export default class UsersScreen extends React.Component {
  static navigationOptions = {
    title: 'Lazy',
    tabBarLabel: ({ tintColor }) => (<Text style={{color: tintColor}}>Teman</Text>),
    tabBarIcon: ({ tintColor }) => (<Icon size={18} 
                          color={tintColor}  
                          name="contacts" />)
  }

  render() {
    if (false) {
      return (
        <UsersList/>
      );
    }

    return (
      <BelomLogin 
        onPressLogin={() => this.props.navigation.navigate("LoginScreen")}
        onPressRegister={() => this.props.navigation.navigate("RegisterScreen")}        
        title="Daftar Teman"
        description="Halaman ini berisi daftar teman yang kamu miliki.
        Ingin mencoba menambah teman?
        Silahkan login dengan akun kamu terlebih dahulu."
      />
    );
  }
}
