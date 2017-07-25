import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MembersScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MembersScreen</Text>
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
