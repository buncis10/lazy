import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import t from 'tcomb-form-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { saveVideo, fetchVideo, updateVideo, deleteVideo } from '../../../actions';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'MainTab'})
  ]
})

const Form = t.form.Form;

const Video = t.struct({
  title: t.String,
  url: t.String,
  description: t.String
})

class VideoForm extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Buat Video Baru'
  });
  
  state = {
    kelas_id: this.props.video ? this.props.video.kelas_id : null,
    id: this.props.video ? this.props.video.id : null,
    title: this.props.video ? this.props.video.title : '',
    url: this.props.video ? this.props.video.url : '',
    description: this.props.video ? this.props.video.description : '',
    loading: false,
    errors: {}
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      id: nextProps.video.id,
      title: nextProps.video.title,
      url: nextProps.video.url,
      description: nextProps.video.description,   
      kelas_id: nextProps.video.kelas_id   
    })
  }

  componentDidMount(){
    const { params } = this.props.navigation.state;
    if(params.id){
      this.props.fetchVideo(params.kelas_id, params.id);
    }
  }

  afterSubmit = (action) => { 
    this.setState({ loading: false}),
    Alert.alert('Success', `Video berhasil Di${action}`,[
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
        this.props.updateVideo(this.state.kelas_id, this.state.id, value).then(this.afterSubmit('update'))
      } else {
        this.props.saveVideo(params.kelas_id, value).then(this.afterSubmit('buat'))
      }
    }
  }

  onDeletePress = () => {
    this.setState({ loading: true });
    this.props.deleteVideo(this.state.kelas_id, this.state.id).then(this.afterSubmit('hapus'))
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        <Form
          ref="form"
          type={Video}
          value={this.state}
        />
        <Button title={"Submit"} onPress={this.onSubmitPress}></Button>
        { this.props.video != null && <Button title={"Delete"} onPress={this.onDeletePress} color="#B71C1C"></Button> }        
      </View>
    );
  }
}

function mapStateToProps(state,props) {
  if ( props.navigation.state.params.id !== undefined) {
    return {
      video: state.video
    }
  }
  return { video: null };
}

export default connect(mapStateToProps, { saveVideo, fetchVideo, updateVideo, deleteVideo })(VideoForm);