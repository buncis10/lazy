import React from 'react';
import { Button } from 'react-native'
import { View, Screen, ListView, Tile, Image, Divider, Subtitle, Title, Row, Caption, Icon } from '@shoutem/ui';

export default class MembersScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Members`,
  });

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      loading: false,
      restaurants: [{
        "name": "Gaspar Brasserie",
        "address": "185 Sutter St, San Francisco, CA 94109",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
      }, {
        "name": "Chalk Point Kitchen",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
      }, {
        "name": "Chalk Point Kitchen",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
      }, {
        "name": "Chalk Point Kitchen",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
      }, {
        "name": "Chalk Point Kitchen",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
      }, {
        "name": "Chalk Point Kitchen",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
      }, {
        "name": "Chalk Point Kitchen",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
      }, {
        "name": "Chalk Point Kitchen",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
      }, {
        "name": "Chalk Point Kitchen",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
      }, {
        "name": "Chalk Point Kitchen",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
      }],
    }
  }

  renderRow(restaurant) {
    return (
      <Row>
        <Image
          styleName="small rounded-corners"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
        />
        <View styleName="vertical stretch space-between">
          <Subtitle>Wilco Cover David Bowie&#39;s "Space Oddity"</Subtitle>
          <Caption>June 21  ·  20:00</Caption>
        </View>
      </Row>
    );
  }

  render() {
    return (
      <Screen>
        <Button title="asdqqwe" onPress={()=> this.setState({ loading: true })}></Button>
        <Button title="nope" onPress={()=> this.setState({ loading: false })}></Button>        
        <ListView
          data={this.state.restaurants}
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