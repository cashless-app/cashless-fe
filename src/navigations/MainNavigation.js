import React from 'react';
import SplashScreen from '../Screens/SplashScreens';
import Home from '../Screens/Main/Home';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import TabScreen from '../Screens/Main/TabScreen';
import HistoryNavigation from './HistoryNavigation';
import SwipeScreen from '../Screens/SwipeScreen'

const StackLoading = createStackNavigator(
  {
    SplashScreen,
    SwipeScreen
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: "none"
  }
);

const StackApp = createStackNavigator(
  {
    StackLoading,
    TabScreen,
    HistoryNavigation,
  },
  {
    headerMode: 'none',
  },
);

const Router = createStackNavigator(
  {
    StackLoading,
    StackApp,
  },
  {
    initialRouteName: 'StackLoading',
    headerMode: 'none',
  },
);

export default createAppContainer(Router);
