import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Isinya smua kelas dulu</Text>
        <Button title={"Go To Class"} onPress={() => this.props.navigation.navigate('KelasTab')}></Button>
        <Button title={"Create Class"} onPress={() => this.props.navigation.navigate('KelasForm')}></Button>
        <Button title={"Go To Kelases"} onPress={() => this.props.navigation.navigate('KelasesScreen')}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});