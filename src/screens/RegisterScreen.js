import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Account = t.struct({
  email: t.String,
  password: t.String
})

export default class RegisterScreen extends React.Component {
  
  // onPress =() => {
  //   const value = this.refs.form.getValue();
  //   if (value) {
  //     return fetch('http://192.168.0.19:3000/users', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email: 'yourValue',
  //         password: 'yourOtherValue',
  //       })
  //     })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       return responseJson;
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  //   }
  // }

  onPress = () => {
    return fetch('http://192.168.0.19:3000/users/1', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        return console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Register</Text>
        <Form
          ref="form"
          type={Account}
        />
        <Button title={"Register"} onPress={this.onPress}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
