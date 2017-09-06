import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchKelas } from '../../actions';

class KelasScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Kelas ${navigation.state.params.id}`,
    headerRight: <Button title="Edit" onPress={() => navigation.navigate('KelasForm', {id: navigation.state.params.id})}/>
  });

  componentDidMount(){
    const { params } = this.props.navigation.state;
    this.props.fetchKelas(params.id);
  }

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  imageLogin: {
      flex: .5,
      backgroundColor: '#FF3366'
  },
  inputANDbutton: {
      flex: .25,
      backgroundColor: '#000'
  },
  register: {
      flex: 1,
      backgroundColor: '#CCC'
  },
});


function mapStateToProps(state) {
  return {
    kelas: state.kelas
  }
}

export default connect(mapStateToProps, { fetchKelas })(KelasScreen);
