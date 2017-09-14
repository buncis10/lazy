import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { TextInput } from '@shoutem/ui';

export default class DaftarScreen extends React.Component {
  
    static navigationOptions = ({ navigation }) => ({
        title: `Daftar Screen`,
        header: null
      });
//Buat ngetes aja
  _onPressButton() {
    Alert.alert('You tapped next button!')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageDaftar}>
          <Image
            style={styles.image}
            source={require('./logodaftarmazi.png')}
          />
        </View>
        <View style={styles.inputANDbutton}>
          <TextInput 
            keyboardType={'email-address'}
            style={{height: 50, width:300, marginTop:10, marginBottom:10, paddingTop:5, paddingBottom:5, borderColor: 'gray', borderWidth: .3}}
            placeholder={'Email'}
          />
          <TextInput
            style={{height: 50, width:300, marginBottom:10, paddingTop:5, paddingBottom:5, borderColor: 'gray', borderWidth: .3}}
            placeholder={'Name'}
            autoCapitalize={"words"}
          />
          <TextInput 
            secureTextEntry={true}
            style={{height: 50, width:300, marginBottom:10, paddingTop:5, paddingBottom:5, borderColor: 'gray', borderWidth: .3}}
            placeholder={'Password'}
          />
          <TextInput 
            secureTextEntry={true}
            style={{height: 50, width:300, marginBottom:15, paddingTop:5, paddingBottom:5, borderColor: 'gray', borderWidth: .3}}
            placeholder={'Confirm Password'}
          />
          <View>
            <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.Login}>
            <Text style={{color:'grey'}}>Have an account? </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("MasukScreen")}>
              <Text style={{color:'grey', fontWeight:'bold'}}>Login</Text>
            </TouchableOpacity>
          </View>
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
  imageDaftar: {
      flex: .5,
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


