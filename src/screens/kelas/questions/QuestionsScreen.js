import React from 'react';
import { StyleSheet, Button, FlatList } from 'react-native';
import { View, Text, Subtitle, Row, Image, TouchableOpacity, Icon } from '@shoutem/ui'
import { connect } from 'react-redux';
import { fetchComments } from '../../../actions';
import ActionButton from 'react-native-action-button';

class QuestionsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Questions`,
  });
  
  componentDidMount() {
    this.props.fetchComments(this.props.screenProps);
  }

  renderRow = ({item}) => (
    <Row styleName="small">
      <Image
        styleName="small-avatar"
        source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-9.png' }}
      />
      <View styleName="vertical">
        <Subtitle>{item.title}</Subtitle>
        <Text numberOfLines={2}>{item.body}</Text>
      </View>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('QuestionForm', {id: item.id, kelas_id: item.commentable_id})}>
        <Icon styleName="disclosure" name="right-arrow" />
      </TouchableOpacity>
    </Row>
  )

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
            data={this.props.comments}
            keyExtractor={item => item.id}
            renderItem={this.renderRow}
        />
        <ActionButton 
         buttonColor="rgba(231,76,60,1)"
         onPress={() => this.props.navigation.navigate('QuestionForm', {kelas_id: this.props.screenProps})}
        >
        </ActionButton>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps, { fetchComments })(QuestionsScreen);
