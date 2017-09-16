import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
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
Form.stylesheet.textbox.normal.height = 40;
Form.stylesheet.textbox.normal.width = 300;
Form.stylesheet.textbox.normal.borderColor = 'gray';
Form.stylesheet.textbox.normal.borderWidth = .3;


const Account = t.struct({
  email: t.String,
  password: t.String
})

const options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true,
    }
  }
};

class LoginScreen extends React.Component {
    static navigationOptions = {
    title: 'Login',
    header: null
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
        <View style={styles.imageLogin}>
          <Image
            style={styles.image}
            source={require('../../assets/logotulisanmazi.png')}
          />
        </View>
        
        <View style={styles.inputANDbutton}>
          <Form
            ref="form"
            type={Account}
            options={options}
          />
          <View>
            <TouchableHighlight onPress={this.onLoginPress} underlayColor='white'>
              <View style={styles.button}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        
        <View style={styles.register}>
          <Text style={{color:'grey'}}>Don't have account? </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("RegisterScreen")}>
            <Text style={{color:'grey', fontWeight:'bold'}}>Register</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  imageLogin: {
      flex: .5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff'
  },
  image: {
    width: 150,
    height: 80,
  },
  inputANDbutton: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#ffffff'
  },
  register: {
    flex: .2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopColor: 'grey',
    borderTopWidth: .5,
  },
  button: {
    width: 300,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#fbc400',
  },
  buttonText: {
    fontWeight: 'bold',
    padding: 15,
    color: '#fbc400',
  }
});

export default connect(null, { loginAccount })(LoginScreen);

