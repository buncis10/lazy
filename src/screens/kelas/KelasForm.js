import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import t from 'tcomb-form-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { saveKelas, fetchKelas, updateKelas, deleteKelas } from '../../actions';

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
    title: 'Buat Kelas Baru'
  });

  state = {
    loading: false,
    errors: {}
  }

  componentDidMount(){
    const { params } = this.props.navigation.state;
    if(params){
      this.props.fetchKelas(params.id);
    }
  }

  default_value = {
    title: this.props.kelas ? this.props.kelas.title : '',         
    description: this.props.kelas ? this.props.kelas.description : '',
  }

  onSubmitPress = () => {
    let errors = {};
    const value = this.refs.form.getValue();
    if (value) {
      this.setState({ loading: true });
      if (this.props.kelas != null) {
        this.props.updateKelas(this.props.kelas.id, value).then(
          () => { this.setState({ loading: false}),
                  Alert.alert('Success', "Kelas berhasil Di Update",[
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
      } else {
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
  }

  onDeletePress = () => {
    this.setState({ loading: true });
    this.props.deleteKelas(this.props.kelas.id).then(
      () => { this.setState({ loading: false }),
              Alert.alert('Success', "Kelas telah dihapus",[
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
    console.log(this.props.kelas)    
    return (
      <View style={{flex: 1}}>
        <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        <Form
          ref="form"
          type={Kelas}
          value={this.default_value}
        />
        <Button title={"Submit"} onPress={this.onSubmitPress}></Button>
        { this.props.kelas != null && <Button title={"Delete"} onPress={this.onDeletePress} color="#B71C1C"></Button> }
      </View>
    );
  }
}

function mapStateToProps(state,props) {
  if ( props.navigation.state.params !== undefined) {
    return {
      kelas: state.kelas
    }
  }
  return { kelas: null };
}

export default connect(mapStateToProps, { saveKelas, fetchKelas, updateKelas, deleteKelas })(KelasForm);