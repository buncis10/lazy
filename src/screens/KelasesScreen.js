import React from 'react';
import { StyleSheet, Text, Button, FlatList,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchKelases } from '../actions';
import { Subtitle, Caption, TouchableOpacity, Row, Image, View } from '@shoutem/ui';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

class KelasesScreen extends React.Component {
  static navigationOptions = {
    title: 'Daftar Kelas',
  };

  state = {
    isLoading: true
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      isLoading: nextProps.kelases.isLoading
    })
  }

  componentDidMount() {
    this.props.fetchKelases();
  }

  renderRow = ({item}) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate('KelasAtasScreen', {id: item.id})}>
      <Row>
        <Image
          styleName="small rounded-corners"
          source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-6.png' }}
        />
        <View styleName="vertical stretch space-between">
          <Subtitle>{item.title}</Subtitle>
          <Caption>20 hours ago</Caption>
        </View>
      </Row>
    </TouchableOpacity>
  )

  render() {
    if(this.state.isLoading){
      return (<ActivityIndicator/>)
    }

    return (
      <View style={{flex: 1}}>
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

function mapStateToProps(state) {
  return {
    kelases: state.kelases.kelases,
    isLoading: state.kelases.isLoading,
  }
}

export default connect(mapStateToProps, { fetchKelases })(KelasesScreen);
