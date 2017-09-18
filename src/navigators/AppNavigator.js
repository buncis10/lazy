import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import ChatScreen from '../screens/ChatScreen'
import KelasScreen from '../screens/kelas/KelasScreen'

// IMPORT STACK NAVIGATOR
import MaziIntro from '../screens/MaziIntro'

// IMPORT AUTHENTICATION
import RegisterScreen from '../screens/authentication/RegisterScreen'
import LoginScreen from '../screens/authentication/LoginScreen'

// IMPORT MAIN TAB
import KelasesScreen from '../screens/maintab/KelasesScreen'
import ConversationsScreen from '../screens/maintab/ConversationsScreen'
import UsersScreen from '../screens/maintab/UsersScreen'
import ProfileScreen from '../screens/maintab/ProfileScreen'

// IMPORT SMUA FORM
import KelasForm from '../screens/kelas/KelasForm'
import QuestionForm from '../screens/kelas/questions/QuestionForm'
import MateriForm from '../screens/kelas/materis/MateriForm'
import LinkForm from '../screens/kelas/links/LinkForm'
import VideoForm from '../screens/kelas/videos/VideoForm'

import ConversationsList from '../screens/list/ConversationsList'

const MainTab = TabNavigator ({
  MainScreen: { screen: KelasesScreen },
  ConversationsScreen: { screen: ConversationsScreen },
  DaftarTeman: { screen: UsersScreen },
  ProfileScreen: { screen: ProfileScreen},
  }, {
  tabBarPosition: 'bottom',
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#fbc400',
    inactiveTintColor: '#696969',
    showIcon: true,
    style: {
      backgroundColor: '#ffffff',
    },
    labelStyle: {
      fontSize:10,
      marginBottom: 0,
      paddingBottom: 0,
      color: '#696969',
    },
    indicatorStyle: {
      backgroundColor: '#fff'
    },
    pressColor: "#FBC400"
    },
})

const AppNavigator = StackNavigator ( {
  MaziIntro: { screen: MaziIntro },
  MainTab: { screen: MainTab},
  KelasScreen: { screen: KelasScreen},
  KelasForm: { screen: KelasForm},
  QuestionForm: { screen: QuestionForm},
  MateriForm: { screen: MateriForm},
  LinkForm: { screen: LinkForm},
  VideoForm: { screen: VideoForm},
  RegisterScreen: { screen: RegisterScreen},
  LoginScreen: { screen: LoginScreen},
  ChatScreen: { screen: ChatScreen }
})

export default AppNavigator;
