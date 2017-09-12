import React from 'react';
import { Button } from 'react-native'
import { View, Screen, ListView, Tile, Image, Text, Divider, Subtitle, Title, Row, Caption, Icon } from '@shoutem/ui';

export default class DaftarTeman extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Teman`,
  });

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      loading: false,
      temans: [{
        "name": "Antonius Angga Kurniawan",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
      }, {
        "name": "Mutiara Romana Kusuma",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
      }, {
        "name": "Andrey Agassy Cristhian",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
      }, {
        "name": "Elvin Arief Maulana",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg" },
      }, {
        "name": "Bayu Aji Tanoyo",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-5.jpg" },
      }, {
        "name": "Wawan Budiman",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg" },
      }, {
        "name": "Dimas Reno",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
      }, {
        "name": "Okta Panca Sumely",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg" },
      }, {
        "name": "Harry Potter",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
      }, {
        "name": "Lily Potter",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-5.jpg" },
      }],
    }
  }

  renderRow(teman) {
    return (
      <Row styleName="small">
        <Image
          style={{height: 50, width: 50, borderRadius: 30}}
          source={{ uri: teman.image.url }}
        />
        <Text>{teman.name}</Text>
        {/* <Icon styleName="disclosure" name="plus-button" /> */}
      </Row>
    );
  }

  render() {
    return (
      <Screen>
        {/* <Button title="asdqqwe" onPress={()=> this.setState({ loading: true })}></Button>
        <Button title="nope" onPress={()=> this.setState({ loading: false })}></Button>         */}
        <ListView
          data={this.state.temans}
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