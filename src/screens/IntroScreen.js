import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class IntroScreen extends React.Component {
  static navigationOptions = {
    title: 'Collaborative Learning Application',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Collaborative Learning Application</Text>
        <Button title={"Login"} onPress={() => this.props.navigation.navigate('LoginScreen')}></Button>
        <Button title={"Register"} onPress={() => this.props.navigation.navigate('RegisterScreen')}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
