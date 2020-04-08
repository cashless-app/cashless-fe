import React from 'react';
import SplashScreen from '../Screens/SplashScreens';
import Home from '../Screens/Main/Home';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import TabScreen from '../Screens/Main/TabScreen';
import HistoryNavigation from './HistoryNavigation';

const StackLoading = createStackNavigator({
  SplashScreen,
});

const StackApp = createStackNavigator(
  {
    TabScreen,
    HistoryNavigation,
  },
  {
    headerMode: 'none',
  },
);

const Router = createStackNavigator(
  {
    StackApp,
  },
  {
    // initialRouteName: 'StackLoading',
    headerMode: 'none',
  },
);

export default createAppContainer(Router);
