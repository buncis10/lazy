import React from 'react';
import { View, Button, Text } from 'react-native'

export default class BelomLoginScreen extends React.Component {

  render() {
    return (
      <View>
        <Button title="Daftar" onPress={() => this.props.navigation.navigate("DaftarScreen")}></Button>
        <Button title="Login" onPress={() => this.props.navigation.navigate("MasukScreen")}></Button>
      </View>
    );
  }
}