import React from 'react';
import { StyleSheet, View, Text, Button, Alert, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Image, Divider } from '@shoutem/ui';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BelomLoginTemanScreen extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'TEMAN',
    tabBarIcon: () => (<Icon size={18} color="#9E9E9E" name="contacts" />)
  }

  _onPressButton() {
    Alert.alert('You tapped next button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.chatBelumLogin}>
          <Text style={{fontSize: 24, fontWeight:'bold'}}>Teman</Text>
          <Image  
            styleName="large-wide"
            source={{ uri: 'https://shoutem.github.io/static/getting-started/restaurant-1.jpg'}}>
          </Image>
          <Text style={{textAlign: 'center'}}>
            Halaman ini berisi daftar teman yang kamu miliki.
            Ingin mencoba menambah teman?
            Silahkan login dengan akun kamu terlebih dahulu.</Text>
          <TouchableHighlight onPress={() => this.props.navigation.navigate("LoginScreen")} underlayColor='white'>
            <View style={styles.button}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </View>
          </TouchableHighlight>                    
        </View>
        <Divider styleName="line" />
        <View style={styles.bagianBawah}>
          <Text style={{color:'grey'}}>Don't have account? </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("DaftarScreen")}>
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
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  chatBelumLogin: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  bagianBawah: {
    flex: .15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 250,
    alignItems: 'center',
    backgroundColor: '#388ee2',
    borderWidth: 1,
    borderColor: '#388ee2',
  },
  buttonText: {
    fontWeight: 'bold',
    padding: 15,
    color: '#FFFFFF',
  }
});

{/* <Button title="Daftar" onPress={() => this.props.navigation.navigate("DaftarScreen")}></Button>
        <Button title="Login" onPress={() => this.props.navigation.navigate("LoginScreen")}></Button> */}