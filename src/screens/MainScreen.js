import React from 'react';
import { StyleSheet, Alert, Text, View, Button, TouchableHighlight, ScrollView} from 'react-native';
import { TextInput, Card, Image, Subtitle, Caption } from '@shoutem/ui';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';

export default class MainScreen extends React.Component {
  
    static navigationOptions = {
        tabBarLabel: ({ tintColor }) => (<Text style={{color: tintColor}}>Home</Text>),
        title: 'HOME',
        tabBarIcon: ({ tintColor }) => (<Icon size={18} color={tintColor} name="home" />)
      }

  render() {
    return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.recommendedForyou}>
                        <Text style={styles.judulTab}>
                            Recommended for you
                        </Text>
                        <View>
                            <ScrollView 
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <Card style={{
                                    marginTop: 10, 
                                    marginBottom:10, marginLeft:10,
                                    elevation: 2 }}>
                                    <Image
                                        style={{
                                            flexDirection:'row', 
                                            justifyContent:'space-between', 
                                            alignItems:'flex-start'}}
                                        styleName="medium-wide"
                                        source={{uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-10.png"}}>
                                        <Text style={styles.judulKelas}>Abrasi</Text>
                                        <Icon style={{fontSize:15,
                                            padding: 5, 
                                            color:'#FFFFFF'}} 
                                            name='more-vert'>
                                        </Icon>
                                    </Image>
                                    <View style={{
                                        margin: 5}}>
                                        <Text style={{
                                            color:'grey'}}>Antonius Angga</Text>
                                    </View>
                                    <View style={styles.barisIcon}>
                                        <Text>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="thumb-up">
                                            </Icon>
                                            <Text>10</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="web-asset">
                                            </Icon>
                                            <Text>12</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="file-upload">
                                            </Icon>
                                            <Text>14</Text>
                                        </Text>
                                    </View>
                                </Card>
                                <Card style={{
                                    marginTop: 10, 
                                    marginBottom:10, marginLeft:10,
                                    elevation: 2 }}>
                                    <Image
                                        style={{
                                            flexDirection:'row', 
                                            justifyContent:'space-between', 
                                            alignItems:'flex-start'}}
                                        styleName="medium-wide"
                                        source={{uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-10.png"}}>
                                        <Text style={styles.judulKelas}>Perkalian</Text>
                                        <Icon style={{fontSize:15,
                                            padding: 5, 
                                            color:'#FFFFFF'}} 
                                            name='more-vert'>
                                        </Icon>
                                    </Image>
                                    <View style={{
                                        margin: 5}}>
                                        <Text style={{
                                            color:'grey'}}>Mutiara Romana Kusuma</Text>
                                    </View>
                                    <View style={styles.barisIcon}>
                                        <Text>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="thumb-up">
                                            </Icon>
                                            <Text>10</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="web-asset">
                                            </Icon>
                                            <Text>10</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="file-upload">
                                                
                                            </Icon>
                                            <Text>10</Text>
                                        </Text>
                                    </View>
                                </Card>
                                <Card style={{
                                    marginTop: 10, 
                                    marginBottom:10, marginLeft:10,
                                    elevation: 2 }}>
                                    <Image
                                        style={{
                                            flexDirection:'row', 
                                            justifyContent:'space-between', 
                                            alignItems:'flex-start'}}
                                        styleName="medium-wide"
                                        source={{uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-10.png"}}>
                                        <Text style={styles.judulKelas}>Reproduksi</Text>
                                        <Icon style={{fontSize:15,
                                            padding: 5, 
                                            color:'#FFFFFF'}} 
                                            name='more-vert'>
                                        </Icon>
                                    </Image>
                                    <View style={{
                                        margin: 5}}>
                                        <Text style={{
                                            color:'grey'}}>Andrey Agassy</Text>
                                    </View>
                                    <View style={styles.barisIcon}>
                                        <Text>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="thumb-up">
                                                
                                            </Icon>
                                            <Text>10</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="web-asset">
                                                
                                            </Icon>
                                            <Text>12</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="file-upload">
                                               
                                            </Icon>
                                            <Text>14</Text>
                                        </Text>
                                    </View>
                                </Card>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.byFolloweduser}>
                        <Text style={styles.judulTab}>
                            By Followed User
                        </Text>
                        <View>
                            <ScrollView 
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <Card style={{
                                    marginTop: 10, 
                                    marginBottom:10, marginLeft:10,
                                    elevation: 2 }}>
                                    <Image
                                        style={{
                                            flexDirection:'row', 
                                            justifyContent:'space-between', 
                                            alignItems:'flex-start'}}
                                        styleName="medium-wide"
                                        source={{uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-10.png"}}>
                                        <Text style={styles.judulKelas}>Abrasi</Text>
                                        <Icon style={{fontSize:15,
                                            padding: 5, 
                                            color:'#FFFFFF'}} 
                                            name='more-vert'>
                                        </Icon>
                                    </Image>
                                    <View style={{
                                        margin: 5}}>
                                        <Text style={{
                                            color:'grey'}}>Antonius Angga</Text>
                                    </View>
                                    <View style={styles.barisIcon}>
                                        <Text>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="thumb-up">
                                                
                                            </Icon>
                                            <Text>10</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="web-asset">
                                                
                                            </Icon>
                                            <Text>12</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="file-upload">
                                                
                                            </Icon>
                                            <Text>14</Text>
                                        </Text>
                                    </View>
                                </Card>
                                <Card style={{
                                    marginTop: 10, 
                                    marginBottom:10, marginLeft:10,
                                    elevation: 2 }}>
                                    <Image
                                        style={{
                                            flexDirection:'row', 
                                            justifyContent:'space-between', 
                                            alignItems:'flex-start'}}
                                        styleName="medium-wide"
                                        source={{uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-10.png"}}>
                                        <Text style={styles.judulKelas}>Perkalian</Text>
                                        <Icon style={{fontSize:15,
                                            padding: 5, 
                                            color:'#FFFFFF'}} 
                                            name='more-vert'>
                                        </Icon>
                                    </Image>
                                    <View style={{
                                        margin: 5}}>
                                        <Text style={{
                                            color:'grey'}}>Mutiara Romana Kusuma</Text>
                                    </View>
                                    <View style={styles.barisIcon}>
                                        <Text>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="thumb-up">
                                                
                                            </Icon>
                                            <Text>10</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="web-asset">
                                                
                                            </Icon>
                                            <Text>12</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="file-upload">
                                                
                                            </Icon>
                                            <Text>14</Text>
                                        </Text>
                                    </View>
                                </Card>
                                <Card style={{
                                    marginTop: 10, 
                                    marginBottom:10, marginLeft:10,
                                    elevation: 2 }}>
                                    <Image
                                        style={{
                                            flexDirection:'row', 
                                            justifyContent:'space-between', 
                                            alignItems:'flex-start'}}
                                        styleName="medium-wide"
                                        source={{uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-10.png"}}>
                                        <Text style={styles.judulKelas}>Reproduksi</Text>
                                        <Icon style={{fontSize:15,
                                            padding: 5, 
                                            color:'#FFFFFF'}} 
                                            name='more-vert'>
                                        </Icon>
                                    </Image>
                                    <View style={{
                                        margin: 5}}>
                                        <Text style={{
                                            color:'grey'}}>Andrey Agassy</Text>
                                    </View>
                                    <View style={styles.barisIcon}>
                                        <Text>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="thumb-up">
                                                
                                            </Icon>
                                            <Text>10</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="web-asset">
                                                
                                            </Icon>
                                            <Text>12</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="file-upload">
                                                
                                            </Icon>
                                            <Text>14</Text>
                                        </Text>
                                    </View>
                                </Card>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.popular}>
                        <Text style={styles.judulTab}>
                            Popular
                        </Text>
                        <View>
                            <ScrollView 
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <Card style={{
                                    marginTop: 10, 
                                    marginBottom:10, marginLeft:10,
                                    elevation: 2 }}>
                                    <Image
                                        style={{
                                            flexDirection:'row', 
                                            justifyContent:'space-between', 
                                            alignItems:'flex-start'}}
                                        styleName="medium-wide"
                                        source={{uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-10.png"}}>
                                        <Text style={styles.judulKelas}>Abrasi</Text>
                                        <Icon style={{fontSize:15,
                                            padding: 5, 
                                            color:'#FFFFFF'}} 
                                            name='more-vert'>
                                        </Icon>
                                    </Image>
                                    <View style={{
                                        margin: 5}}>
                                        <Text style={{
                                            color:'grey'}}>Antonius Angga</Text>
                                    </View>
                                    <View style={styles.barisIcon}>
                                        <Text>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="thumb-up">
                                                
                                            </Icon>
                                            <Text>10</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="web-asset">
                                                
                                            </Icon>
                                            <Text>12</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="file-upload">
                                                
                                            </Icon>
                                            <Text>14</Text>
                                        </Text>
                                    </View>
                                </Card>
                                <Card style={{
                                    marginTop: 10, 
                                    marginBottom:10, marginLeft:10,
                                    elevation: 2 }}>
                                    <Image
                                        style={{
                                            flexDirection:'row', 
                                            justifyContent:'space-between', 
                                            alignItems:'flex-start'}}
                                        styleName="medium-wide"
                                        source={{uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-10.png"}}>
                                        <Text style={styles.judulKelas}>Perkalian</Text>
                                        <Icon style={{fontSize:15,
                                            padding: 5, 
                                            color:'#FFFFFF'}} 
                                            name='more-vert'>
                                        </Icon>
                                    </Image>
                                    <View style={{
                                        margin: 5}}>
                                        <Text style={{
                                            color:'grey'}}>Mutiara Romana Kusuma</Text>
                                    </View>
                                    <View style={styles.barisIcon}>
                                        <Text>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="thumb-up">
                                                
                                            </Icon>
                                            <Text>10</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="web-asset">
                                               
                                            </Icon>
                                            <Text>12</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="file-upload">
                                                
                                            </Icon>
                                            <Text>14</Text>
                                        </Text>
                                    </View>
                                </Card>
                                <Card style={{
                                    marginTop: 10, 
                                    marginBottom:10, marginLeft:10,
                                    elevation: 2 }}>
                                    <Image
                                        style={{
                                            flexDirection:'row', 
                                            justifyContent:'space-between', 
                                            alignItems:'flex-start'}}
                                        styleName="medium-wide"
                                        source={{uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-10.png"}}>
                                        <Text style={styles.judulKelas}>Reproduksi</Text>
                                        <Icon style={{fontSize:15,
                                            padding: 5, 
                                            color:'#FFFFFF'}} 
                                            name='more-vert'>
                                        </Icon>
                                    </Image>
                                    <View style={{
                                        margin: 5}}>
                                        <Text style={{
                                            color:'grey'}}>Andrey Agassy</Text>
                                    </View>
                                    <View style={styles.barisIcon}>
                                        <Text>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="thumb-up">
                                                
                                            </Icon>
                                            <Text>10</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="web-asset">
                                                
                                            </Icon>
                                            <Text>12</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="file-upload">
                                                
                                            </Icon>
                                            <Text>14</Text>
                                        </Text>
                                    </View>
                                </Card>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.recentUpload}>
                        <Text style={styles.judulTab}>
                            Recent Upload
                        </Text>
                        <View>
                            <ScrollView 
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <Card style={{
                                    marginTop: 10, 
                                    marginBottom:10, marginLeft:10,
                                    elevation: 2 }}>
                                    <Image
                                        style={{
                                            flexDirection:'row', 
                                            justifyContent:'space-between', 
                                            alignItems:'flex-start'}}
                                        styleName="medium-wide"
                                        source={{uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-10.png"}}>
                                        <Text style={styles.judulKelas}>Abrasi</Text>
                                        <Icon style={{fontSize:15,
                                            padding: 5, 
                                            color:'#FFFFFF'}} 
                                            name='more-vert'>
                                        </Icon>
                                    </Image>
                                    <View style={{
                                        margin: 5}}>
                                        <Text style={{
                                            color:'grey'}}>Antonius Angga</Text>
                                    </View>
                                    <View style={styles.barisIcon}>
                                        <Text>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="thumb-up">
                                               
                                            </Icon>
                                            <Text>10</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="web-asset">
                                                
                                            </Icon>
                                            <Text>12</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="file-upload">
                                                
                                            </Icon>
                                            <Text>14</Text>
                                        </Text>
                                    </View>
                                </Card>
                                <Card style={{
                                    marginTop: 10, 
                                    marginBottom:10, marginLeft:10,
                                    elevation: 2 }}>
                                    <Image
                                        style={{
                                            flexDirection:'row', 
                                            justifyContent:'space-between', 
                                            alignItems:'flex-start'}}
                                        styleName="medium-wide"
                                        source={{uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-10.png"}}>
                                        <Text style={styles.judulKelas}>Perkalian</Text>
                                        <Icon style={{fontSize:15,
                                            padding: 5, 
                                            color:'#FFFFFF'}} 
                                            name='more-vert'>
                                        </Icon>
                                    </Image>
                                    <View style={{
                                        margin: 5}}>
                                        <Text style={{
                                            color:'grey'}}>Mutiara Romana Kusuma</Text>
                                    </View>
                                    <View style={styles.barisIcon}>
                                        <Text>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="thumb-up">
                                                
                                            </Icon>
                                            <Text>10</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="web-asset">
                                                
                                            </Icon>
                                            <Text>12</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="file-upload">
                                                
                                            </Icon>
                                            <Text>14</Text>
                                        </Text>
                                    </View>
                                </Card>
                                <Card style={{
                                    marginTop: 10, 
                                    marginBottom:10, marginLeft:10,
                                    elevation: 2 }}>
                                    <Image
                                        style={{
                                            flexDirection:'row', 
                                            justifyContent:'space-between', 
                                            alignItems:'flex-start'}}
                                        styleName="medium-wide"
                                        source={{uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-10.png"}}>
                                        <Text style={styles.judulKelas}>Reproduksi</Text>
                                        <Icon style={{fontSize:15,
                                            padding: 5, 
                                            color:'#FFFFFF'}} 
                                            name='more-vert'>
                                        </Icon>
                                    </Image>
                                    <View style={{
                                        margin: 5}}>
                                        <Text style={{
                                            color:'grey'}}>Andrey Agassy</Text>
                                    </View>
                                    <View style={styles.barisIcon}>
                                        <Text>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="thumb-up">
                                                
                                            </Icon>
                                            <Text>10</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="web-asset">
                                                
                                            </Icon>
                                            <Text>12</Text>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="file-upload">
                                                
                                            </Icon>
                                            <Text>14</Text>
                                        </Text>
                                    </View>
                                </Card>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.kategori}>
                        <Text style={styles.judulTab}>
                            Kategori
                        </Text>
                    </View>
                </ScrollView>
                <ActionButton 
                    buttonColor="#FBC400"
                    onPress={() => this.props.navigation.navigate('KelasBaru')}>
                </ActionButton>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FAFAFA'
  },
  recommendedForyou: {
    height: 185,
  },
  byFolloweduser: {
    height: 185,
    borderTopColor: '#E0E0E0',
    borderTopWidth: .3,
  },
  popular: {
    height: 185,
    borderTopColor: '#E0E0E0',
    borderTopWidth: .3,
  },
  recentUpload: {
    height: 185,
    borderTopColor: '#E0E0E0',
    borderTopWidth: .3,
  },
  kategori: {
    height: 185,
    borderTopColor: '#E0E0E0',
    borderTopWidth: .3,
  },
  judulTab: {
    marginLeft:10, 
    marginTop: 10, 
    color: 'grey', 
    fontWeight:'bold'
  },
  judulKelas: {
    padding: 5, 
    color:'#FFFFFF', 
    fontWeight:'bold'
  },
  barisIcon: {
    flexDirection: 'row', 
    marginLeft: 5, 
    marginBottom: 5
  },
});


