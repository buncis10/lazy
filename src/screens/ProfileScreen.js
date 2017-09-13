import React from 'react';
import { StyleSheet, Alert, Text, View, Button, TouchableOpacity } from 'react-native';
import { Image, Icon } from '@shoutem/ui';
import { connect } from 'react-redux';

export default class KelasAtasScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Profile`,
  });

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bagianAtas}>
            <View style={styles.profilnya}>
                <View style={styles.bagianKiri}>
                    <Image
                        style={{height: 70, width: 70, borderRadius: 50}}
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
        <View style={styles.kontentabnya}></View>
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
    flex: .35,
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
    backgroundColor: '#CCC'
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
  }
  
});
