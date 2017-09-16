import React from 'react';
import { StyleSheet, View, Text, Button, Alert, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Image, Divider } from '@shoutem/ui';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BelomLoginChatScreen = props => (
  <View style={styles.container}>
    <View style={styles.chatBelumLogin}>
      <Text style={{fontSize: 24, fontWeight:'bold'}}>{props.title}</Text>
      <Image  
        styleName="large-wide"
        source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}}>
      </Image>
      <Text style={{textAlign: 'center'}}>
        {props.description}</Text>
      <TouchableHighlight onPress={props.onPressLogin} underlayColor='white'>
        <View style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </View>
      </TouchableHighlight>                    
    </View>
    <Divider styleName="line" />
    <View style={styles.bagianBawah}>
      <Text style={{color:'grey'}}>Don't have account? </Text>
      <TouchableOpacity onPress={props.onPressRegister}>
        <Text style={{color:'grey', fontWeight:'bold'}}>Register</Text>
      </TouchableOpacity>
    </View>
  </View>
)

BelomLoginChatScreen.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,  
  onPressLogin: React.PropTypes.func.isRequired,
  onPressRegister: React.PropTypes.func.isRequired
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

export default BelomLoginChatScreen;