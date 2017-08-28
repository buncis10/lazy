import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Row, Image } from '@shoutem/ui'
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

  renderRow = ({item}) => (
    <Row styleName="small">
      <Image
        styleName="small-avatar"
        source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
      />
      <Text>Add comment</Text>
    </Row>
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList
            data={this.props.kelases}
            keyExtractor={item => item.id}
            renderItem={this.renderRow}
        />
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
