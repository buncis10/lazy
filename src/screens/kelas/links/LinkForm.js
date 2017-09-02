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
    kelas_id: this.props.link ? this.props.link.kelas_id : null,
    id: this.props.link ? this.props.link.id : null,
    title: this.props.link ? this.props.link.title : '',
    url: this.props.link ? this.props.link.url : '',
    description: this.props.link ? this.props.link.description : '',
    loading: false,
    errors: {}
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      id: nextProps.link.id,
      title: nextProps.link.title,
      url: nextProps.link.url,
      description: nextProps.link.description,   
      kelas_id: nextProps.link.kelas_id   
    })
  }

  componentDidMount(){
    const { params } = this.props.navigation.state;
    if(params.id){
      this.props.fetchLink(params.kelas_id, params.id);
    }
  }

  afterSubmit = (action) => { 
    this.setState({ loading: false}),
    Alert.alert('Success', `Link berhasil Di${action}`,[
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
        this.props.updateLink(this.state.kelas_id, this.state.id, value).then(this.afterSubmit('update'))
      } else {
        this.props.saveLink(params.kelas_id, value).then(this.afterSubmit('buat'))
      }
    }
  }

  onDeletePress = () => {
    this.setState({ loading: true });
    this.props.deleteLink(this.state.kelas_id, this.state.id).then(this.afterSubmit('hapus'))
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        <Form
          ref="form"
          type={Link}
          value={this.state}
        />
        <Button title={"Submit"} onPress={this.onSubmitPress}></Button>
        { this.props.link != null && <Button title={"Delete"} onPress={this.onDeletePress} color="#B71C1C"></Button> }        
      </View>
    );
  }
}

function mapStateToProps(state,props) {
  if ( props.navigation.state.params.id !== undefined) {
    return {
      link: state.link
    }
  }
  return { link: null };
}

export default connect(mapStateToProps, { saveLink, fetchLink, updateLink, deleteLink })(LinkForm);