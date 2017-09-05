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
    kelas_id: this.props.comment ? this.props.comment.commentable_id : null,
    id: this.props.comment ? this.props.comment.id : null,
    title: this.props.comment ? this.props.comment.title : '',
    body: this.props.comment ? this.props.comment.body : '',
    loading: false,
    errors: {}
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      id: nextProps.comment.id,
      title: nextProps.comment.title,
      body: nextProps.comment.body,
      kelas_id: nextProps.comment.commentable_id
    })
  }

  componentDidMount(){
    const { params } = this.props.navigation.state;
    if(params.id){
      this.props.fetchComment(params.kelas_id, params.id);
    }
  }

  afterSubmit = (action) => { 
    this.setState({ loading: false}),
    Alert.alert('Success', `Pertanyaan berhasil Di${action}`,[
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ], { cancelable: false }),
    this.props.navigation.dispatch(resetAction);
  }

  onSubmitPress = () => {
    const { params } = this.props.navigation.state;
    let errors = {};
    const value = this.refs.form.getValue();
    if (value) {
      this.setState({ loading: true });
      if (this.state.id != null) {
        this.props.updateComment(this.state.kelas_id, this.state.id, value).then(this.afterSubmit('update'))
      } else {
        this.props.saveComment(params.kelas_id, value).then(this.afterSubmit('buat'))
      }
    }
  }

  onDeletePress = () => {
    this.setState({ loading: true });
    this.props.deleteComment(this.state.kelas_id, this.state.id).then(this.afterSubmit('hapus'))
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        <Form
          ref="form"
          type={Question}
          value={this.state}
          options={options}
        />
        <Button title={"Submit"} onPress={this.onSubmitPress}></Button>
        { this.props.comment != null && <Button title={"Delete"} onPress={this.onDeletePress} color="#B71C1C"></Button> }        
      </View>
    );
  }
}

function mapStateToProps(state,props) {
  if ( props.navigation.state.params.id !== undefined) {
    return {
      comment: state.comment
    }
  }
  return { comment: null };
}

export default connect(mapStateToProps, { saveComment, fetchComment, updateComment, deleteComment })(QuestionForm);