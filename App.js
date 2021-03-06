import React, { Component } from 'react';
import {
  Text
} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Home from './src/screens/Home'
import Login from './src/screens/Login'
import About from './src/screens/About'
import Profile from './src/screens/Profile'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    path: 'home/',
    navigationOptions: {
      title: 'Esta es la Home'
    }
  },
  About,
  Profile,
},
  {
    initialRouteName: 'Home',
    navigationOptions: {
      title: 'Un título genérico',
      headerTitleAllowFontScaling: true,
      //header: <Text style={{color: 'white'}}>Esto es un header</Text>
      headerBackTitle: 'Atrás',
      gesturesEnabled: true,
      headerBackImage: <Text>{`<=`}</Text>
    },
    initialRouteKey: 'home',
    initialRouteParams: {
      nombre: 'Jean Carlo Flores'
    },
    headerMode: 'screen',
    mode: 'card',
    cardStyle: {
      borderWidth: 2,
      //backgroundColor: 'red'

    },
    //headerTransitionPreset: 'fade-in-place',
    headerTransitionPreset: 'uikit',

  })

const Main = createStackNavigator(
  {
    Main: {
      screen: AppNavigator
    },
    Login: {
      screen: Login
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  })
export default Main