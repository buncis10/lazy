import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
import ExploreScreen from '../screens/ExploreScreen'
import KelasesScreen from '../screens/KelasesScreen'

import KelasForm from '../screens/kelas/KelasForm'
import QuestionForm from '../screens/kelas/questions/QuestionForm'
import MateriForm from '../screens/kelas/materis/MateriForm'
import LinkForm from '../screens/kelas/links/LinkForm'
import VideoForm from '../screens/kelas/videos/VideoForm'

import IntroScreen from '../screens/IntroScreen'
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'

import ExampleScreen from '../screens/ExampleScreen'
import UsersScreen from '../screens/UsersScreen'
import ChatScreen from '../screens/ChatScreen'

//Angga Nambahin
import MasukScreen from '../screens/MasukScreen'
import DaftarScreen from '../screens/DaftarScreen'
import MaziIntro from '../screens/MaziIntro'

import KelasAtasScreen from '../screens/kelas/KelasAtasScreen'
import KelasBaru from '../screens/kelas/KelasBaru'

import MainScreen from '../screens/MainScreen'
import DaftarTeman from '../screens/DaftarTeman'
import ProfileScreen from '../screens/ProfileScreen'
// import CobaGridView from '../screens/CobaGridView'

import BelomLoginScreen from '../screens/BelomLoginScreen'

const MainTab = TabNavigator ({
  MainScreen: { screen: MainScreen },
  KelasesScreen: { screen: KelasesScreen },
  ChatScreen: { screen: ChatScreen },
  DaftarTeman: { screen: DaftarTeman },
  }, {
  tabBarPosition: 'top',
  lazy: true,
  tabBarOptions: {
    scrollEnabled: true,
    style: {
      backgroundColor: '#FBC400'
    }
    },
})

const AppNavigator = StackNavigator ( {
  MainTab: { screen: MainTab},    
  BelomLoginScreen: { screen: BelomLoginScreen },
  MaziIntro: { screen: MaziIntro },
  MainTab: { screen: MainTab},  
  ExampleScreen : { screen: ExampleScreen},
  KelasAtasScreen: { screen: KelasAtasScreen},
  KelasForm: { screen: KelasForm},
  QuestionForm: { screen: QuestionForm},
  MateriForm: { screen: MateriForm},
  LinkForm: { screen: LinkForm},
  VideoForm: { screen: VideoForm},
  MasukScreen: { screen: MasukScreen},
  DaftarScreen: { screen: DaftarScreen},
  LoginScreen: { screen: LoginScreen},
  ChatScreen: { screen: ChatScreen }
})

export default AppNavigator;
