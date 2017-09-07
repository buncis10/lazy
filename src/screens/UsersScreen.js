import React from 'react';
import { FlatList, ActivityIndicator, Button } from 'react-native';
import { TouchableOpacity, Text, View, Row, Image, Subtitle, Icon } from '@shoutem/ui'

export default class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'All Users',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    return fetch('https://api-lazy.herokuapp.com/users.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          users: responseJson
        });
      })
      .catch((error) => {
        console.log('fetchusers :', error);
      });
  }

  renderRow = ({item}) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatScreen')}>
      <Row styleName="small">
        <Image
          styleName="small-avatar"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
        />
        <View styleName="vertical">
          <Subtitle>{item.username}</Subtitle>
          <Text numberOfLines={1}>{item.email}</Text>
        </View>
        <Icon styleName="disclosure" name="right-arrow" />
      </Row>
    </TouchableOpacity>
  )

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.users}
          keyExtractor={item => item.id}
          renderItem={this.renderRow}
        />
      </View>
    );
  }
}
