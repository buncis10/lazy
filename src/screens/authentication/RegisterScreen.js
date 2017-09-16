import React from 'react';
import { ScrollView, StyleSheet, Alert, Text, View, Button, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import t from 'tcomb-form-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { saveAccount } from '../../actions';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'MainTab'})
  ]
})

const Form = t.form.Form;
Form.stylesheet.textbox.normal.height = 50;
Form.stylesheet.textbox.normal.width = 300;
Form.stylesheet.textbox.normal.marginBottom = 10;
Form.stylesheet.textbox.normal.paddingTop = 5;
Form.stylesheet.textbox.normal.paddingBottom = 5;
Form.stylesheet.textbox.normal.borderColor = 'gray';
Form.stylesheet.textbox.normal.borderWidth = .3;

const Account = t.struct({
  username: t.String,
  email: t.String,
  password: t.String,
  password_confirmation: t.String
})

const options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true,
    },
    password_confirmation: {
      password: true,
      secureTextEntry: true,
    }
  }
};

class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Register',
    header: null
  };
  
  state = {
    loading: false,
    errors: {}
  }
  
  onRegisterPress = () => {
    let errors = {};
    const value = this.refs.form.getValue();
    if (value) {
      this.setState({ loading: true });
      this.props.saveAccount(value).then(
        () => { this.setState({ loading: false}),
                Alert.alert('Success', "register berhasil",[
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
        <View style={styles.imageDaftar}>
          <Image
            style={styles.image}
            source={require('../../../assets/logodaftarmazi.png')}
          />
        </View>
        <View style={styles.inputANDbutton}>
          <Form
            ref="form"
            type={Account}
            options={options}            
          />
          <View>
            <TouchableHighlight onPress={this.onRegisterPress} underlayColor='white'>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.Login}>
            <Text style={{color:'grey'}}>Have an account? </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("LoginScreen")}>
              <Text style={{color:'grey', fontWeight:'bold'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default connect(null, { saveAccount })(RegisterScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  imageDaftar: {
      flex: .3,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
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
  Login: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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


