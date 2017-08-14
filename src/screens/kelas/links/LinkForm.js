import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import t from 'tcomb-form-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'MainTab'})
  ]
})

const Form = t.form.Form;

const Link = t.struct({
  title: t.String,
  url: t.String,
  description: t.String
})

export default class LinkForm extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Buat Link Baru'
  });

  state = {
    loading: false,
    errors: {}
  }

  onSubmitPress = () => {
    console.log("dipencet")
  }

  render() {
    return (
      <View style={styles.container}>
        <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        <Form
          ref="form"
          type={Link}
        />
        <Button title={"Submit"} onPress={this.onSubmitPress}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
