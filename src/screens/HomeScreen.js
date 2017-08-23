import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerRight: <Button title="Example" 
                  onPress={() => navigation.navigate('ExampleScreen')}
                 />,
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello This is main tab</Text>
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
    flex: 1
  },
});

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
}

export default connect(mapStateToProps)(HomeScreen);

