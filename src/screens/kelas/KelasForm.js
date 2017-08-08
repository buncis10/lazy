import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import t from 'tcomb-form-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { saveKelas } from '../../actions';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'MainTab'})
  ]
})

const Form = t.form.Form;

const Kelas = t.struct({
  title: t.String,
  description: t.String
})

class KelasForm extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Buat Kelas Baru',
    headerRight: <Button title="Save" onPress={() => navigation.dispatch(resetAction)}/>
  });

  state = {
    loading: false,
    errors: {}
  }

  onSubmitPress = () => {
    let errors = {};
    const value = this.refs.form.getValue();
    if (value) {
      this.setState({ loading: true });
      this.props.saveKelas(value).then(
        () => { this.setState({ loading: false}),
                Alert.alert('Success', "Kelas berhasil Dibuat",[
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
          type={Kelas}
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

export default connect(null, { saveKelas })(KelasForm);