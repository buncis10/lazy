import React, { Component } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import AppIntro from 'react-native-app-intro';
import { NavigationActions } from 'react-navigation'

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'MainTab' })
  ]
})

export default class MaziIntro extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Mazi Intro`,
    header: null
  });

  onSkipBtnHandle = () => {
    this.props.navigation.dispatch(resetAction)
  }
  
  doneBtnHandle = () => {
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    const pageArray = [{
      title: 'Kelompok Belajar',
      description: 'Kamu bisa membuat atau bergabung dengan kelompok belajar dalam kelas virtual',
      img: require('../../assets/gambar_intro_1.png'),
      imgStyle: {
        height: 80 * 2.5,
        width: 109 * 2.5,
      },
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Sharing',
      description: 'Dalam kelas ini, kamu bisa saling berbagi ilmu lewat tanya jawab, dokumen atau link belajar',
      img: require('../../assets/gambar_intro_2.png'),
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Live Video Sharing',
      description: 'Kamu juga bisa berbagi ilmu lewat video atau screen sharing secara live',
      img: require('../../assets/gambar_intro_3.png'),
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Chatting Interaktif',
      description: 'Agar lebih leluasa untuk mengobrol, kamu bisa chat personal teman kamu',
      img: require('../../assets/gambar_intro_4.png'),
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
    }, {
      title: "McDonald's",
      description: "I'm lovin it",
      img: "https://vignette.wikia.nocookie.net/logopedia/images/6/6f/McDonalds.png/revision/latest?cb=20161217022233",
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#dd1021',
      fontColor: '#ffc300',
      level: 10,
    }];
    return (
      <AppIntro
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
        pageArray={pageArray}
      />
    );
  }
}