import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import t from 'tcomb-form-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { saveMateri, fetchMateri, updateMateri, deleteMateri } from '../../../actions';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'MainTab'})
  ]
})

const Form = t.form.Form;

const Materi = t.struct({
  title: t.String,
  file: t.String,
  description: t.String
})

class MateriForm extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Buat Materi Baru'
  });
  
  state = {
    kelas_id: this.props.materi ? this.props.materi.kelas_id : null,
    id: this.props.materi ? this.props.materi.id : null,
    title: this.props.materi ? this.props.materi.title : '',
    file: this.props.materi ? this.props.materi.file : '',
    description: this.props.materi ? this.props.materi.description : '',
    loading: false,
    errors: {}
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      id: nextProps.materi.id,
      title: nextProps.materi.title,
      file: nextProps.materi.file,
      description: nextProps.materi.description,   
      kelas_id: nextProps.materi.kelas_id   
    })
  }

  componentDidMount(){
    const { params } = this.props.navigation.state;
    if(params.id){
      this.props.fetchMateri(params.kelas_id, params.id);
    }
  }

  afterSubmit = (action) => { 
    this.setState({ loading: false}),
    Alert.alert('Success', `Materi berhasil Di${action}`,[
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
        this.props.updateMateri(this.state.kelas_id, this.state.id, value).then(this.afterSubmit('update'))
      } else {
        this.props.saveMateri(params.kelas_id, value).then(this.afterSubmit('buat'))
      }
    }
  }

  onDeletePress = () => {
    this.setState({ loading: true });
    this.props.deleteMateri(this.state.kelas_id, this.state.id).then(this.afterSubmit('hapus'))
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        <Form
          ref="form"
          type={Materi}
          value={this.state}
        />
        <Button title={"Submit"} onPress={this.onSubmitPress}></Button>
        { this.props.materi != null && <Button title={"Delete"} onPress={this.onDeletePress} color="#B71C1C"></Button> }        
      </View>
    );
  }
}

function mapStateToProps(state,props) {
  if ( props.navigation.state.params.id !== undefined) {
    return {
      materi: state.materi
    }
  }
  return { materi: null };
}

export default connect(mapStateToProps, { saveMateri, fetchMateri, updateMateri, deleteMateri })(MateriForm);