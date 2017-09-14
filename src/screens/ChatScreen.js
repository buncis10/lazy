import React from 'react';
import { Button } from 'react-native'
import { connect } from 'react-redux';

import { View, Screen, ListView, Tile, Image, Text, Divider, Subtitle, Title, Row, Caption, Icon } from '@shoutem/ui';
import BelomLoginScreen from './BelomLoginScreen'

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat`,
  });

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      loading: false,
      chats: [{
        "name": "Antonius Angga Kurniawan",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
        "waktu": "19.50",
        "pesan": "Halo, senang bisa belajar bersama kamu"
      }, {
        "name": "Mutiara Romana Kusuma",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
        "waktu": "19.00",
        "pesan": "Halo, senang bisa belajar bersama kamu"
      }, {
        "name": "Andrey Agassy Cristhian",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
        "waktu": "18.45",
        "pesan": "Halo, senang bisa belajar bersama kamu"
      }, {
        "name": "Elvin Arief Maulana",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg" },
        "waktu": "18.34",
        "pesan": "Halo, senang bisa belajar bersama kamu"
      }, {
        "name": "Bayu Aji Tanoyo",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-5.jpg" },
        "waktu": "18.30",
        "pesan": "Halo, senang bisa belajar bersama kamu"
      }, {
        "name": "Wawan Budiman",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg" },
        "waktu": "18.22",
        "pesan": "Halo, senang bisa belajar bersama kamu"
      }, {
        "name": "Dimas Reno",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
        "waktu": "18.13",
        "pesan": "Halo, senang bisa belajar bersama kamu"
      }, {
        "name": "Okta Panca Sumely",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg" },
        "waktu": "yesterday",
        "pesan": "Halo, senang bisa belajar bersama kamu"
      }, {
        "name": "Harry Potter",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
        "waktu": "yesterday",
        "pesan": "Halo, senang bisa belajar bersama kamu"
      }, {
        "name": "Lily Potter",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-5.jpg" },
        "waktu": "yesterday",
        "pesan": "Halo, senang bisa belajar bersama kamu"
      }],
    }
  }

  renderRow(chat) {
    return (
      <Row styleName="small">
        <Image
            style={{height: 50, width: 50, borderRadius: 30}}
            source={{ uri: chat.image.url }}
        />
        <View styleName="vertical">
            <View styleName="horizontal space-between">
                <Subtitle style={{fontFamily:'sans-serif'}}>{chat.name}</Subtitle>
                <Caption style={{fontFamily:'sans-serif'}}>{chat.waktu}</Caption>
            </View>
            <Text numberOfLines={1} style={{fontFamily:'sans-serif'}}>{chat.pesan}</Text>
        </View>
      </Row>
    );
  }

  render() {
    if(this.props.isAuthenticated){
      return (
        <BelomLoginScreen/>
      );
    }

    return (
      <Screen>
        <ListView
          data={this.state.chats}
          renderRow={this.renderRow}
          onRefresh = {() => { console.log("sekali aja") 
                               this.setState({ loading: true })
                              }
                            }
          loading = {this.state.loading}
          onLoadMore = {() => { console.log("loadmore") 
                                this.setState({ loading: true })}} 
        />
      </Screen>
    );
  }
}

function mapStateToProps(state,props) {
  return { 
    isAuthenticated: state.account.isAuthenticated 
  };
}

export default connect(mapStateToProps)(ChatScreen);