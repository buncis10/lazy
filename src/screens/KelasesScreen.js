import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchKelases } from '../actions';
import { List, ListItem } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

class KelasesScreen extends React.Component {
  static navigationOptions = {
    title: 'Daftar Kelas',
  };

  componentDidMount() {
    this.props.fetchKelases();
  }

  render() {
    return (
      <View style={styles.container}>
        <List>
          <FlatList
              data={this.props.kelases}
              keyExtractor={item => item.id}
              renderItem={({item}) => <ListItem
                                        roundAvatar
                                        key={item.id}
                                        title={item.title}
                                        subtitle={<View>
                                                    <Text>{item.name}</Text>
                                                    <Text>{item.description}</Text>
                                                  </View>
                                                }
                                        avatar={"blank"}
                                        onPress={() => console.log("lontong dipencet listnya")}
                                      />}
          />
        </List>
        <ActionButton 
         buttonColor="rgba(231,76,60,1)"
         onPress={() => this.props.navigation.navigate('KelasForm')}
        >
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {
    kelases: state.kelases
  }
}

export default connect(mapStateToProps, { fetchKelases })(KelasesScreen);
