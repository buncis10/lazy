import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchMateris } from '../../actions';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

class MaterisScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Materi`,
  });

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.props.fetchMateris(params.id);
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
              data={this.props.materis}
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
    materis: state.materis
  }
}

export default connect(mapStateToProps, { fetchMateris })(MaterisScreen);
