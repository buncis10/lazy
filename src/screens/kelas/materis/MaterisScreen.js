import React from 'react';
import { FlatList } from 'react-native';
import { View, Text, Subtitle, Row, Image, Icon, TouchableOpacity } from '@shoutem/ui'
import { connect } from 'react-redux';
import { fetchMateris } from '../../../actions';
import ActionButton from 'react-native-action-button';

class MaterisScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Materi`,
  });

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.props.fetchMateris(params.id);
  }

  renderRow = ({item}) => (
    <Row styleName="small">
      <Icon name="news" />
      <View styleName="vertical">
        <Subtitle>{item.title}</Subtitle>
        <Text numberOfLines={2}>{item.description}</Text>
      </View>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('MateriForm', {id: item.id, kelas_id: item.kelas_id})}>
        <Icon styleName="disclosure" name="right-arrow" />
      </TouchableOpacity>
    </Row>
  )

  render() {
    const { params } = this.props.navigation.state;    
    return (
      <View style={{flex: 1}}>
        <FlatList
            data={this.props.materis}
            keyExtractor={item => item.id}
            renderItem={this.renderRow}
        />
        <ActionButton 
         buttonColor="rgba(231,76,60,1)"
         onPress={() => this.props.navigation.navigate('MateriForm', {kelas_id: params.id})}
        >
        </ActionButton>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    materis: state.materis
  }
}

export default connect(mapStateToProps, { fetchMateris })(MaterisScreen);
