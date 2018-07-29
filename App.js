import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation'
import Home from './src/screens/Home'
import Login from './src/screens/Login'
import About from './src/screens/About'
import Profile from './src/screens/Profile'

const AppNavigator = createStackNavigator({
  Home,
  About,
  Profile,
  Login
})

export default AppNavigator