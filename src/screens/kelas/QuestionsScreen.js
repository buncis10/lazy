import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

class QuestionsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Questions`,
  });
  
  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.props.fetchComments(params.id);
  }

  renderRow = ({item}) => (
    <ListItem
      key={item.id}
      title={item.title}
      subtitle={<View>
                  <Text>{item.body}</Text>
                </View>
              }
    />
  )

  render() {
    return (
      <View style={styles.container}>
        <List>
          <FlatList
              data={this.props.comments}
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
    comments: state.comments
  }
}

export default connect(mapStateToProps, { fetchComments })(QuestionsScreen);
