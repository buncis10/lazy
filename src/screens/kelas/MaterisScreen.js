import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MaterisScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Materi`,
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>Materis Screen</Text>
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
