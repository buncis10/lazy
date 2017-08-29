import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchVideos } from '../../../actions';
import { Caption, View, Text, Subtitle, Row, Image } from '@shoutem/ui';
import ActionButton from 'react-native-action-button';

class VideoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Videos`,
  });

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.props.fetchVideos(params.id);
  }

  renderRow = ({item}) => (
    <Row>
      <Image
        styleName="small rounded-corners"
        source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-6.png' }}
      />
      <View styleName="vertical stretch space-between">
        <Subtitle>Fact Check: Wisconsin Music, Film & Photography Debate</Subtitle>
        <Caption>20 hours ago  ·  20:00</Caption>
      </View>
    </Row>
  )

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
            data={this.props.videos}
            keyExtractor={item => item.id}
            renderItem={this.renderRow}
        />
        <ActionButton 
         buttonColor="rgba(231,76,60,1)"
         onPress={() => this.props.navigation.navigate('VideoForm')}
        >
        </ActionButton>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos
  }
}

export default connect(mapStateToProps, { fetchVideos })(VideoScreen);
