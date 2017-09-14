import React from 'react';
import { Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchLinks } from '../../../actions';
import { View, Text, Subtitle, Row, Image, Icon, TouchableOpacity, Caption } from '@shoutem/ui'
import ActionButton from 'react-native-action-button';

class LinksScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Links`,
  });
  
  componentDidMount() {
    this.props.fetchLinks(this.props.screenProps);
  }

  renderRow = ({item}) => (
    <Row styleName="small">
      <Icon style={{fontFamily:'sans-serif'}} 
        name="web" />
      <View 
        styleName="vertical">
        <Subtitle style={{fontFamily:'sans-serif'}}
          numberOfLines={2}>{item.title}</Subtitle>
        {/* <Text numberOfLines={2}>{item.description}</Text> */}
        <Caption numberOfLines={1}>{item.url}</Caption>
      </View>
      {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('LinkForm', {id: item.id, kelas_id: item.kelas_id})}>
        <Icon styleName="disclosure" name="right-arrow" />
      </TouchableOpacity> */}
    </Row>
  )

  render() {
    const { params } = this.props.navigation.state;    
    return (
      <View style={{flex: 1}}>
        <FlatList
              data={this.props.links}
              keyExtractor={item => item.id}
              renderItem={this.renderRow}
        />
        <ActionButton 
         buttonColor="#FF6B00"
         onPress={() => this.props.navigation.navigate('LinkForm', {kelas_id: this.props.screenProps})}
        >
        </ActionButton>
      </View>
    );
  }
}


function mapStateToProps(state) {
  return {
    links: state.links
  }
}

export default connect(mapStateToProps, { fetchLinks })(LinksScreen);
