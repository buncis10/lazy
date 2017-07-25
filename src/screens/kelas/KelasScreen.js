import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class KelasScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Kelas #104`,
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>KelasScreen</Text>
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
