import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import ExploreScreen from '../screens/ExploreScreen'
import KelasesScreen from '../screens/KelasesScreen'

import KelasScreen from '../screens/kelas/KelasScreen'
import QuestionsScreen from '../screens/kelas/QuestionsScreen'
import VideosScreen from '../screens/kelas/VideosScreen'
import MaterisScreen from '../screens/kelas/MaterisScreen'
import MembersScreen from '../screens/kelas/MembersScreen'
import KelasForm from '../screens/kelas/KelasForm'

import IntroScreen from '../screens/IntroScreen'
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'

const KelasTab = TabNavigator ({
  KelasScreen: { screen: KelasScreen },
  QuestionScreen: { screen: QuestionsScreen },
  VideoScreen:{ screen: VideosScreen },
  MateriScreen:{ screen: MaterisScreen },
  MemberScreen:{ screen: MembersScreen },
})

const MainTab = TabNavigator ({
  HomeScreen: { screen: HomeScreen },
  KelasesScreen: { screen: KelasesScreen }
  }, {
  tabBarPosition: 'bottom',
  lazy: true
})

const AppNavigator = StackNavigator ( {
  MainTab: { screen: MainTab},
  IntroScreen: { screen: IntroScreen },
  RegisterScreen: { screen: RegisterScreen},
  KelasTab: { screen: KelasTab},
  KelasForm: { screen: KelasForm},
  LoginScreen: { screen: LoginScreen},
})

export default AppNavigator;