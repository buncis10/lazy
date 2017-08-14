import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchVideos } from '../../actions';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
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
    <ListItem
      key={item.id}
      title={item.title}
      subtitle={<View>
                  <Text>{item.description}</Text>
                </View>
              }
    />
  )

  render() {
    return (
      <View style={styles.container}>
        <List>
          <FlatList
              data={this.props.videos}
              keyExtractor={item => item.id}
              renderItem={this.renderRow}
          />
        </List>
        <ActionButton 
         buttonColor="rgba(231,76,60,1)"
         onPress={() => this.props.navigation.navigate('VideoForm')}
        >
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

function mapStateToProps(state) {
  return {
    videos: state.videos
  }
}

export default connect(mapStateToProps, { fetchVideos })(VideoScreen);
