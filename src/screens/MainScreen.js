import React from 'react';
import { StyleSheet, Alert, Text, View, Button, TouchableHighlight, ScrollView} from 'react-native';
import { TextInput, Card, Image, Subtitle, Caption, Icon } from '@shoutem/ui';

export default class MainScreen extends React.Component {
  
    static navigationOptions = ({ navigation }) => ({
        title: `Home`,
      });

    
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
                                            name='settings'>
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
                                                name="like">
                                                <Text>10</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="loyalty-card">
                                                <Text>12</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="share">
                                                <Text>14</Text>
                                            </Icon>
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
                                            name='settings'>
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
                                                name="like">
                                                <Text>10</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="loyalty-card">
                                                <Text>12</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="share">
                                                <Text>14</Text>
                                            </Icon>
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
                                            name='settings'>
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
                                                name="like">
                                                <Text>10</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="loyalty-card">
                                                <Text>12</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="share">
                                                <Text>14</Text>
                                            </Icon>
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
                                            name='settings'>
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
                                                name="like">
                                                <Text>10</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="loyalty-card">
                                                <Text>12</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="share">
                                                <Text>14</Text>
                                            </Icon>
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
                                            name='settings'>
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
                                                name="like">
                                                <Text>10</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="loyalty-card">
                                                <Text>12</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="share">
                                                <Text>14</Text>
                                            </Icon>
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
                                            name='settings'>
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
                                                name="like">
                                                <Text>10</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="loyalty-card">
                                                <Text>12</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="share">
                                                <Text>14</Text>
                                            </Icon>
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
                                            name='settings'>
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
                                                name="like">
                                                <Text>10</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="loyalty-card">
                                                <Text>12</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="share">
                                                <Text>14</Text>
                                            </Icon>
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
                                            name='settings'>
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
                                                name="like">
                                                <Text>10</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="loyalty-card">
                                                <Text>12</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="share">
                                                <Text>14</Text>
                                            </Icon>
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
                                            name='settings'>
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
                                                name="like">
                                                <Text>10</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="loyalty-card">
                                                <Text>12</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="share">
                                                <Text>14</Text>
                                            </Icon>
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
                                            name='settings'>
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
                                                name="like">
                                                <Text>10</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="loyalty-card">
                                                <Text>12</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="share">
                                                <Text>14</Text>
                                            </Icon>
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
                                            name='settings'>
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
                                                name="like">
                                                <Text>10</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="loyalty-card">
                                                <Text>12</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="share">
                                                <Text>14</Text>
                                            </Icon>
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
                                            name='settings'>
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
                                                name="like">
                                                <Text>10</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="loyalty-card">
                                                <Text>12</Text>
                                            </Icon>
                                        </Text>
                                        <Text style={{
                                            marginLeft:15}}>
                                            <Icon style={{ fontSize:15,
                                                color:'grey'}} 
                                                name="share">
                                                <Text>14</Text>
                                            </Icon>
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
  }
});


