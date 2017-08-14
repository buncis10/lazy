import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchLinks } from '../../actions';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

class LinksScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Links`,
  });
  
  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.props.fetchLinks(params.id);
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
              data={this.props.links}
              keyExtractor={item => item.id}
              renderItem={this.renderRow}
          />
        </List>
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
    links: state.links
  }
}

export default connect(mapStateToProps, { fetchLinks })(LinksScreen);
