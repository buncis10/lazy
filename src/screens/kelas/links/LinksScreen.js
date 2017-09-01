import React from 'react';
import { Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchLinks } from '../../../actions';
import { View, Text, Subtitle, Row, Image, Icon } from '@shoutem/ui'
import ActionButton from 'react-native-action-button';

class LinksScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Links`,
  });
  
  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.props.fetchLinks(params.id);
  }

  renderRow = ({item}) => (
    <Row styleName="small">
      <Icon name="web" />
      <View styleName="vertical">
        <Subtitle>{item.title}</Subtitle>
        <Text numberOfLines={2}>{item.description}</Text>
        <Text numberOfLines={1}>{item.url}</Text>
      </View>
      <Icon styleName="disclosure" name="right-arrow" />
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
         buttonColor="rgba(231,76,60,1)"
         onPress={() => this.props.navigation.navigate('LinkForm', {kelas_id: params.id})}
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
