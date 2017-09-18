import React from 'react';
import { StyleSheet, Alert, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput, Image } from '@shoutem/ui';
import TextField from 'react-native-md-textinput';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';

export default class DaftarScreenAvatar extends React.Component {
  
    static navigationOptions = ({ navigation }) => ({
        title: `Daftar Screen Avatar`,
        header: null
      });

      constructor(props){
        super(props)
        this.state = {date:"03-08-2017"}
      }
//Buat ngetes aja
  _onPressButton() {
    Alert.alert('You tapped next button!')
  }
  
  render() {
    let jenjang = [{
        value: 'SD',
    }, {
        value: 'SMP',
    }, {
        value: 'SMA',
    },{
        value: 'KULIAH',
    }];
    return (
      <View style={styles.container}>
        <ScrollView>
            <View style={styles.bagianAtas}>
                <View style={styles.avatar}>
                    <Image style={{marginBottom: 20}}
                        styleName="medium-avatar"
                        source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}}
                    />
                    <TouchableOpacity style={{marginBottom: 30}} onPress={this._onPressButton}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TAMBAH FOTO</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bagianTengah}>
                <DatePicker
                        style={{width: 300}}
                        date={this.state.date}
                        mode="date"
                        placeholder="Birthday date"
                        format="DD-MM-YYYY"
                        minDate="03-08-1994"
                        maxDate="03-08-2050"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36,
                            borderColor: 'gray', 
                            borderWidth: .3,
                            borderTopWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                        },
                        dateText: {
                            color: '#9E9E9E',
                            justifyContent: 'center'
                        }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />
                <Dropdown
                    label='Jenjang pendidikan'
                    data={jenjang}
                    textColor= {'#9E9E9E'} />
                <TextField 
                label={'Minat pelajaran'}
                highlightColor= {'#FBC400'}
                textColor= {'#9E9E9E'} />
            </View>
            <View style={styles.bagianBawah}>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.buttonSelesai}>
                        <Text style={styles.buttonText}>SELESAI</Text>
                    </View>
                </TouchableOpacity>
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
        backgroundColor: '#FFF',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30
      },
    bagianAtas: {
        flex: .6,
    },
    bagianTengah: {
        flex: .5,
    },
    bagianBawah: { 
        height:110,
        justifyContent: 'center', 
        alignItems:'center'
    },  
    avatar: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 200,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#fbc400',
      },
    buttonSelesai: {
        width: 300,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#fbc400',
    },
    buttonText: {
        fontWeight: 'bold',
        padding: 15,
        color: '#fbc400',
    },
});


