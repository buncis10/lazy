import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import t from 'tcomb-form-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { loginAccount } from '../actions';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'MainTab'})
  ]
})

const Form = t.form.Form;

const Account = t.struct({
  email: t.String,
  password: t.String
})

class LoginScreen extends React.Component {
    static navigationOptions = {
    title: 'Login',
  };
  state = {
    loading: false,
    errors: {}
  }
  
  onLoginPress = () => {
    let errors = {};
    const value = this.refs.form.getValue();
    if (value) {
      this.setState({ loading: true });
      this.props.loginAccount(value).then(
        () => { this.setState({ loading: false}),
                Alert.alert('Success', "Login berhasil",[
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ], { cancelable: false }),
                this.props.navigation.dispatch(resetAction);
                 },
        (err) => err.response.json().then(({errors}) =>
          {
            this.setState({loading: false});
            Alert.alert(
              'Error',
              errors.icon.toString(),[
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
            )
          }
        )
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        <Form
          ref="form"
          type={Account}
        />
        <Button title={"Login"} onPress={this.onLoginPress}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(null, { loginAccount })(LoginScreen);

