import React from 'react';
import { StyleSheet, Alert, Text, View, Button, Image, TouchableHighlight, ScrollView } from 'react-native';
import TextField from 'react-native-md-textinput';

export default class KelasBaru extends React.Component {
  
    static navigationOptions = ({ navigation }) => ({
        title: `Kelas Baru`,
      });
//Buat ngetes aja
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
            <View style={styles.teksInputKelasBaru}>
                <TextField style={styles.textInput} 
                    label={'Name'}
                    highlightColor= {'#56CE00'}
                    textColor= {'grey'} />
                <TextField style={styles.textInput}
                    label={'Deskripsi kelas'} 
                    highlightColor= {'#56CE00'}
                    textColor= {'grey'}
                    multiline={true}/>
                <TextField style={styles.textInput}
                    label={'Tag'} highlightColor= {'#56CE00'}
                    textColor= {'grey'} />
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
    backgroundColor: '#FFF'
  },
  teksInputKelasBaru: {
      marginLeft: 20,
      marginRight: 20
  },
});


