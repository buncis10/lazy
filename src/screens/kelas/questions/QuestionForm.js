import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import t from 'tcomb-form-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { saveComment, fetchComment, updateComment, deleteComment } from '../../../actions';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'MainTab'})
  ]
})

const Form = t.form.Form;

const Question = t.struct({
  title: t.String,
  body: t.String,
})

var options = {
  fields: {
    body: {
      // you can use strings or JSX
      multiline: true,
      stylesheet: {
        ...Form.stylesheet,
        textbox: {
            ...Form.stylesheet.textbox,
            normal: {
                ...Form.stylesheet.textbox.normal,
                height: 150
            },
            error: {
                ...Form.stylesheet.textbox.error,
                height: 150
            }
        }
      }
    }
  }
};

class QuestionForm extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Buat Pertanyaan Baru'
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
      this.props.saveComment(params.kelas_id, value).then(
        () => { this.setState({ loading: false}),
                Alert.alert('Success', "Pertanyaan berhasil Dibuat",[
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
    this.props.deleteComment(params.kelas_id, this.props.comment.id).then(
      () => { this.setState({ loading: false }),
              Alert.alert('Success', "Pertanyaan telah dihapus",[
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
      <View style={styles.container}>
        <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        <Form
          ref="form"
          type={Question}
          options={options}
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

function mapStateToProps(state,props) {
  if ( props.navigation.state.params !== undefined) {
    return {
      comment: state.comment
    }
  }
  return { comment: null };
}

export default connect(mapStateToProps, { saveComment, fetchComment, updateComment, deleteComment })(QuestionForm);