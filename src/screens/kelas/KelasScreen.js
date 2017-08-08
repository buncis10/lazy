import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchKelas } from '../../actions';

class KelasScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Kelas ${navigation.state.params.id}`,
    headerRight: <Button title="Edit" onPress={() => navigation.dispatch(resetAction)}/>
  });

  componentDidMount(){
    const { params } = this.props.navigation.state;
    this.props.fetchKelas(params.id);
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>{this.props.kelas.id}</Text>
        <Text>{this.props.kelas.title}</Text>
        <Text>{this.props.kelas.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});


function mapStateToProps(state) {
  return {
    kelas: state.kelas
  }
}

export default connect(mapStateToProps, { fetchKelas })(KelasScreen);
