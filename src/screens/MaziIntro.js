import React, { Component } from 'react';
import { AppRegistry, Alert } from 'react-native';
import AppIntro from 'react-native-app-intro';

export default class MaziIntro extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Mazi Intro`,
    header: null
  });

  onSkipBtnHandle = (index) => {
    Alert.alert('Skip');
    console.log(index);
  }
  doneBtnHandle = () => {
    Alert.alert('Done');
  }
  nextBtnHandle = (index) => {
    Alert.alert('Next');
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }
  render() {
    const pageArray = [{
      title: 'Kelompok Belajar',
      description: 'Kamu bisa membuat atau bergabung dengan kelompok belajar dalam kelas virtual',
      img: require('./gambar_intro_1.png'),
      imgStyle: {
        height: 80 * 2.5,
        width: 109 * 2.5,
      },
      backgroundColor: '#fff',
      level: 10,
    }, {
      title: 'Sharing',
      description: 'Dalam kelas ini, kamu bisa saling berbagi ilmu lewat tanya jawab, dokumen atau link belajar',
      img: require('./gambar_intro_2.png'),
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#fff',
      level: 10,
    }, {
      title: 'Live Video Sharing',
      description: 'Kamu juga bisa berbagi ilmu lewat video atau screen sharing secara live',
      img: require('./gambar_intro_3.png'),
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#fff',
      level: 10,
    }, {
      title: 'Chatting Interaktif',
      description: 'Agar lebih leluasa untuk mengobrol, kamu bisa chat personal teman kamu',
      img: require('./gambar_intro_4.png'),
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#fff',
      level: 10,
    }];
    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
        pageArray={pageArray}
      />
    );
  }
}