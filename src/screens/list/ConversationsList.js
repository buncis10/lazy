import React from 'react';
import { FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
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
    <TouchableOpacity onPress={() => this.props.berpindah(item.recipient_idnya)}>
      <Row styleName="small">
        <Image
            style={{height: 50, width: 50, borderRadius: 30}}
            source={{ uri: "https://facebook.github.io/react/img/logo_og.png"  }}
        />
        <View styleName="vertical">
            <View styleName="horizontal space-between">
                <Subtitle style={{fontFamily:'sans-serif'}}>{item.recipient_name}</Subtitle>
                <Caption style={{fontFamily:'sans-serif'}}>{item.last_message_date}</Caption>
            </View>
            <Text numberOfLines={1} style={{fontFamily:'sans-serif'}}>{item.last_message}</Text>
        </View>
      </Row>
    </TouchableOpacity>
  )

  render() {
    if (this.state.isLoading) {
      return (
        <ActivityIndicator/>
      )
    }

    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.props.conversations}
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
