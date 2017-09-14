import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends React.Component {
  
  //Punya Andrey
  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerRight: <Button title="Example" 
                  onPress={() => navigation.navigate('ExampleScreen')}
                 />,
  });
  
  render() {
    return (
<<<<<<< HEAD
      <View style={styles.container}>      
        <Text>Hello This is main tab</Text>
=======
      <View style={styles.container}>
        <View style={styles.imageLogin}>
          <Image
            style={styles.image}
            source={require('../assets/logotulisanmazi.png')}
          />
        </View>
        <View style={styles.inputANDbutton}>
          <TextInput 
            style={{height: 50, width:300, marginTop:30, marginBottom:20, borderColor: 'gray', borderWidth: .3}}
            placeholder={'Username or email'}
          />
          <TextInput 
            secureTextEntry={true}
            style={{height: 50, width:300, marginBottom:20, borderColor: 'gray', borderWidth: .3}}
            placeholder={'Password'}
          />
          <View>
            <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
              <View style={styles.button}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.register}>
          <Text style={{color:'grey'}}>Don't have account? </Text>
          <Text style={{color:'grey', fontWeight:'bold'}}>Register</Text>
        </View>

        {/* punya andrey */}
        {/* <Text>Hello This is main tab</Text>
>>>>>>> bikin-chat
        <Text>Username: {this.props.account.username}</Text>
        <Text>Email: {this.props.account.email}</Text>
        <Text>Authentication Token: {this.props.account.authentication_token}</Text>
        <Text>URL: {this.props.account.url}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
});

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
}

export default connect(mapStateToProps)(HomeScreen);

