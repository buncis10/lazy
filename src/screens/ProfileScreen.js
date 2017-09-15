import React from 'react';
import { StyleSheet, Alert, Text, View, Button, TouchableOpacity } from 'react-native';
import { Image, GridRow, Screen, ListView, Tile, Title, Subtitle, Divider, Card, Caption } from '@shoutem/ui';
import { connect } from 'react-redux';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BelomLoginProfileScreen from './BelomLoginProfileScreen'

class ProfileScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'PROFILE',
    tabBarIcon: () => (<Icon size={24} color="white" name="person" />)
  }

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      daftars: [{
        "name": "Antonius Angga",
        "namaKelas": "Abrasi",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
        "totthumb-up": "10",
        "totPost": "3",
        "totUnduh": "4"

      }, {
        "name": "Mutiara Romana",
        "namaKelas": "Perkalian",
        "address": "185 Sutter St, San Francisco, CA 94109",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
        "totthumb-up": "12",
        "totPost": "9",
        "totUnduh": "10"
      }, {
        "name": "Andrey Agassy",
        "namaKelas": "Pembagian",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
        "totthumb-up": "8",
        "totPost": "10",
        "totUnduh": "11"
      }, {
        "name": "Wawan Budiman",
        "namaKelas": "Hewan-hewanan",
        "address": "185 Sutter St, San Francisco, CA 94109",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
        "totthumb-up": "12",
        "totPost": "13",
        "totUnduh": "14"
      }, {
        "name": "Rustamin",
        "namaKelas": "Tumbuhan",
        "address": "185 Sutter St, San Francisco, CA 94109",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
        "totthumb-up": "15",
        "totPost": "18",
        "totUnduh": "20"
      }, {
        "name": "Bayu Aji",
        "namaKelas": "Hewan karnivora",
        "address": "185 Sutter St, San Francisco, CA 94109",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
        "totthumb-up": "8",
        "totPost": "6",
        "totUnduh": "5"
      }],
    }
  }

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  renderRow(rowData, sectionId, index) {
    // rowData contains grouped data for one row,
    // so we need to remap it into cells and pass to GridRow

    

    const cellViews = rowData.map((daftar, id) => {
        return (
            <TouchableOpacity key={id} styleName="flexible">
              <Card styleName="flexible"
                    style={{elevation: 2}}>
                <Image
                  styleName="medium-wide"
                  source={{ uri: daftar.image.url  }}
                  style={{  flexDirection:'row', 
                            justifyContent:'space-between', 
                            alignItems:'flex-start'}}>
                    <Text style={styles.judulKelas} numberOfLines={1}>{daftar.namaKelas}</Text>
                    <Icon style={{fontSize:15,
                        padding: 5, 
                        color:'#FFFFFF'}}
                        name='more-vert'>
                    </Icon>
                </Image>
                <View styleName="content">
                  <Subtitle numberOfLines={2} 
                            style={{marginLeft: 5,
                                    fontFamily: 'sans-serif'}}>{daftar.name}</Subtitle>
                  <View styleName="horizontal">
                    {/* <Caption styleName="collapsible" numberOfLines={1}>{daftar.address}</Caption> */}
                    <View style={styles.barisIcon}>
                        <Text style={{fontFamily: 'sans-serif'}}>
                            <Icon style={{ fontSize:15,
                                color:'grey'}} 
                                name="thumb-up">
                                <Text>{daftar.totthumb-up}</Text>
                            </Icon>
                        </Text>
                        <Text style={{
                            marginLeft:15, fontFamily: 'sans-serif'}}>
                            <Icon style={{ fontSize:15,
                                color:'grey'}} 
                                name="web-asset">
                                <Text>{daftar.totPost}</Text>
                            </Icon>
                        </Text>
                        <Text style={{
                            marginLeft:15, fontFamily: 'sans-serif'}}>
                            <Icon style={{ fontSize:15,
                                color:'grey'}} 
                                name="file-upload">
                                <Text>{daftar.totUnduh}</Text>
                            </Icon>
                        </Text>
                    </View>                    
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          );
        });
        return (
          <GridRow columns={2}>
            {cellViews}
          </GridRow>
        );
      }

  render() {

    if(this.props.isAuthenticated){
      return (
        <BelomLoginProfileScreen/>
      );
    }
      // Group the restaurants into rows with 2 columns, except for the
    // first article. The first article is treated as a featured article
    let isFirstArticle = true;
    const groupedData = GridRow.groupByRows(this.state.daftars, 2, () => {
      if (isFirstArticle) {
        isFirstArticle = false;
        return 1;
      }

      return 1;
    });


    return (
      <View style={styles.container}>
        <View style={styles.bagianAtas}>
            <View style={styles.profilnya}>
                <View style={styles.bagianKiri}>
                    <Image
                        style={{height: 90, width: 90, borderRadius: 70}}
                        styleName="medium-avatar"
                        source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}}>
                    </Image>
                    <Text numberOfLines={1} style={{paddingTop: 10, fontWeight:'bold'}}>Antonius Angga Kurniawan</Text>
                </View>
                <View style={styles.bagianKanan}>
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:10}}>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.jumlahKPM}>3</Text>
                                <Text style={{color:'#9E9E9E'}}>kelas</Text>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.jumlahKPM}>4</Text>
                                <Text style={{color:'#9E9E9E'}}>pengikut</Text>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.jumlahKPM}>12</Text>
                                <Text style={{color:'#9E9E9E'}}>mengikuti</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={this._onPressButton}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>EDIT PROFILE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.tabtabnya}></View>
        <View style={styles.kontentabnya}>
            <Screen>
                <ListView
                data={groupedData}
                renderRow={this.renderRow}
                />
            </Screen>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  bagianAtas: {
    flex: .45,
  },
  profilnya: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bagianKiri: {
    flexDirection: 'column',
    maxWidth: 110
  },
  bagianKanan: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  jumlahKPM: {
    textAlign: 'center', 
    fontWeight: 'bold', 
    fontSize:16,
    },
  tabtabnya: {
    flex: .15,
    backgroundColor: '#000'
  },
  kontentabnya: {
    flex: 1,
    backgroundColor: '#fff'
  },
  button: {
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#388EE2',
  },
  buttonText: {
    fontWeight: 'bold',
    padding: 15,
    color: '#388EE2',
  },
  judulKelas: {
    padding: 5, 
    color:'#FFFFFF', 
    fontWeight:'bold'
  },
  barisIcon: {
    flexDirection: 'row', 
    marginLeft: 5, 
    marginBottom: 5,
    paddingTop: 5
  }
});

function mapStateToProps(state,props) {
  return { 
    isAuthenticated: state.account.isAuthenticated 
  };
}

export default connect(mapStateToProps)(ProfileScreen);