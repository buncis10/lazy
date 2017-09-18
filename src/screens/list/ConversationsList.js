import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native'
import { View, Tile, Image, Text, Divider, Subtitle, Title, Row, Caption, Icon } from '@shoutem/ui';
import { connect } from 'react-redux'
import { fetchConversations } from '../../actions';

class ConversationsList extends React.Component {

  state = {
    isLoading: true
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      isLoading: nextProps.conversations.isLoading
    })
  }

  componentDidMount() {
    this.props.fetchConversations();
  }
  
  renderRow = ({item}) => (
    <Row styleName="small">
      <Image
          style={{height: 50, width: 50, borderRadius: 30}}
          source={{ uri: chat.image.url }}
      />
      <View styleName="vertical">
          <View styleName="horizontal space-between">
              <Subtitle style={{fontFamily:'sans-serif'}}>{chat.name}</Subtitle>
              <Caption style={{fontFamily:'sans-serif'}}>{chat.waktu}</Caption>
          </View>
          <Text numberOfLines={1} style={{fontFamily:'sans-serif'}}>{chat.pesan}</Text>
      </View>
    </Row>
  )

  render() {
    if (this.state.isLoading) {
      return (
        <ActivityIndicator/>
      )
    }

    if (!this.state.loading && this.props.conversations.length === 0) {
      return (
        <Text>wew belom ada yang chat masa?</Text>
      )
    }

    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.users}
          keyExtractor={item => item.id}
          renderItem={this.renderRow}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    conversations: state.conversations.conversations,
    isLoading: state.conversations.isLoading,
  }
}

export default connect(mapStateToProps, { fetchConversations })(ConversationsList);
