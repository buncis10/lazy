import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import ExploreScreen from '../screens/ExploreScreen'
import KelasesScreen from '../screens/KelasesScreen'

import KelasScreen from '../screens/kelas/KelasScreen'
import QuestionsScreen from '../screens/kelas/questions/QuestionsScreen'
import VideosScreen from '../screens/kelas/videos/VideosScreen'
import MaterisScreen from '../screens/kelas/materis/MaterisScreen'
import LinksScreen from '../screens/kelas/links/LinksScreen'
import MembersScreen from '../screens/kelas/members/MembersScreen'

import KelasForm from '../screens/kelas/KelasForm'
import QuestionForm from '../screens/kelas/questions/QuestionForm'
import MateriForm from '../screens/kelas/materis/MateriForm'
import LinkForm from '../screens/kelas/links/LinkForm'
import VideoForm from '../screens/kelas/videos/VideoForm'

import IntroScreen from '../screens/IntroScreen'
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'

import ExampleScreen from '../screens/ExampleScreen'

//Angga Nambahin
import MasukScreen from '../screens/MasukScreen'
import DaftarScreen from '../screens/DaftarScreen'
import MainScreen from '../screens/MainScreen'
import MaziIntro from '../screens/MaziIntro'
import KelasAtasScreen from '../screens/KelasAtasScreen'
import KelasBaru from '../screens/kelas/KelasBaru'


const KelasTab = TabNavigator ({
  KelasScreen: { screen: KelasScreen },
  QuestionScreen: { screen: QuestionsScreen },
  VideoScreen:{ screen: VideosScreen },
  MateriScreen:{ screen: MaterisScreen },
  LinkScreen:{ screen: LinksScreen },
  MemberScreen:{ screen: MembersScreen }
  },{
    tabBarOptions: {
      scrollEnabled: true,
      tabStyle: {
        width: 100,    
      },
      labelStyle: {
        fontSize: 12,
      },
    }
})

const MainTab = TabNavigator ({
  KelasBaru: {screen: KelasBaru},
  KelasAtasScreen: {screen: KelasAtasScreen},
  MainScreen: {screen: MainScreen},
  MaziIntro: {screen: MaziIntro},
  MasukScreen: { screen: MasukScreen },
  DaftarScreen: { screen: DaftarScreen },
  HomeScreen: { screen: HomeScreen },
  KelasesScreen: { screen: KelasesScreen }
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
  IntroScreen: { screen: IntroScreen },
  ExampleScreen : { screen: ExampleScreen},
  RegisterScreen: { screen: RegisterScreen},
  KelasTab: { screen: KelasTab},
  KelasForm: { screen: KelasForm},
  QuestionForm: { screen: QuestionForm},
  MateriForm: { screen: MateriForm},
  LinkForm: { screen: LinkForm},
  VideoForm: { screen: VideoForm},
  LoginScreen: { screen: LoginScreen},
})

export default AppNavigator;
