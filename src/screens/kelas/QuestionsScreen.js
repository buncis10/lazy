import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class QuestionsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Questions`,
  });
  
  componentDidMount(){
    console.log("dari pertanyaan")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>QuestionsScreen</Text>
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
