import React from 'react';
import SplashScreen from '../Screens/SplashScreens';
import Home from '../Screens/Main/Home';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import TabScreen from '../Screens/Main/TabScreen';
import HistoryNavigation from './HistoryNavigation';
import SwipeScreen from '../Screens/SwipeScreen';
import TransferScreen from '../Screens/Transaction/TransferScreen';
import HomeScanner from '../Screens/Scan/HomeScanner';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import TopupScreen from '../Screens/Topup/TopupScreen';

const StackLoading = createStackNavigator(
  {
    SplashScreen,
    SwipeScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

const StackAuth = createStackNavigator(
  {
    Login,
    Register,
  },
  {
    headerMode: 'none',
  },
);

const StackApp = createStackNavigator(
  {
    TabScreen,
    HomeScanner,
    TransferScreen,
    HistoryNavigation,
    TopupScreen,
  },
  {
    // initialRouteName: 'TransferScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      StackLoading,
      StackAuth,
      StackApp,
    },
    {
      // initialRouteName: 'StackApp',
      initialRouteName: 'StackLoading',

      headerMode: 'none',
    },
  ),
);
