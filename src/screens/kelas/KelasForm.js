import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'MainTab'})
  ]
})

export default class KelasForm extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <Button title="Save" onPress={() => navigation.dispatch(resetAction)}/>
  });

  render() {
    
    return (
      <View style={styles.container}>
        <Text>KelasForm</Text>
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
