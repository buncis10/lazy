import React from 'react';
import { View, Examples } from '@shoutem/ui';
import { StatusBar } from 'react-native';

export default class IntroScreen extends React.Component {
  static navigationOptions = {
    title: 'Example',
  };
  render() {
    return (
      <View styleName="flexible">
      <Examples />
      <StatusBar barStyle="default" hidden={false} />
    </View>
    );
  }
}