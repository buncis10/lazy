import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import t from 'tcomb-form-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { saveLink, fetchLink, updateLink, deleteLink } from '../../../actions';


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

class LinkForm extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Buat Link Baru'
  });

  state = {
    loading: false,
    errors: {}
  }

  onSubmitPress = () => {
    const { params } = this.props.navigation.state;
    let errors = {};
    const value = this.refs.form.getValue();
    if (value) {
      this.setState({ loading: true });
      this.props.saveLink(params.kelas_id, value).then(
        () => { this.setState({ loading: false}),
                Alert.alert('Success', "Link berhasil Dibuat",[
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

  onDeletePress = () => {
    this.setState({ loading: true });
    this.props.deleteLink(params.kelas_id, this.props.comment.id).then(
      () => { this.setState({ loading: false }),
              Alert.alert('Success', "Link telah dihapus",[
                {text: 'OK', onPress: () => console.log('Ok Pressed')},
              ], { cancelable: false}),
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

  render() {
    return (
      <View style={{flex: 1}}>
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

function mapStateToProps(state,props) {
  if ( props.navigation.state.params !== undefined) {
    return {
      link: state.comment
    }
  }
  return { link: null };
}

export default connect(mapStateToProps, { saveLink, fetchLink, updateLink, deleteLink })(LinkForm);