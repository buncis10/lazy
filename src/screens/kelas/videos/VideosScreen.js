import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchVideos } from '../../../actions';
import { Caption, View, Text, Subtitle, Row, Image, TouchableOpacity } from '@shoutem/ui';
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
        <Subtitle>{item.title}</Subtitle>
        <View styleName="horizontal strech space-between">
          <Caption>20 hours ago  ·  20:00</Caption>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('VideoForm', {id: item.id, kelas_id: item.kelas_id})}>
            <Caption>Edit</Caption>
          </TouchableOpacity>
        </View>
      </View>
    </Row>
  )

  render() {
    const { params } = this.props.navigation.state;    
    return (
      <View style={{flex: 1}}>
        <FlatList
            data={this.props.videos}
            keyExtractor={item => item.id}
            renderItem={this.renderRow}
        />
        <ActionButton 
         buttonColor="rgba(231,76,60,1)"
         onPress={() => this.props.navigation.navigate('VideoForm', {kelas_id: params.id})}
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
