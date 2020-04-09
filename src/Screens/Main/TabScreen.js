import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

//Content
import Home from './Home';
import History from './HistoryScreen.js';
import Pay from './PayScreen';
import Pocket from './PocketScreen';
import ButtonPay from './ButtonPay';
import Profile from '../Profile/';

const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
      },
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarLabel: 'History',
        tabBarVisible: false,
      },
    },
    Pay: {
      screen: Pay, // Empty screen
      navigationOptions: () => ({
        tabBarIcon: <ButtonPay />, // Plus button component
        tabBarVisible: false,
        tabBarOptions: {
          activeTintColor: 'white',
          tabStyle: {
            paddingVertical: 7,
          },
          style: {
            backgroundColor: '#fafafa',
            height: 62,
            borderTopColor: '#e6e6e6',
          },
        },
      }),
    },
    Pocket: {
      screen: Pocket,
      navigationOptions: {
        tabBarLabel: 'Pocket',
        tabBarVisible: false,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
      },
    },
  },
  {
    //router config
    initialRouteName: 'Home',
    Home: ['Home', 'History', 'Pay', 'Pocket', 'Profile'],
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;
        let focus = {width: 28, height: 28};
        let sourceImage;

        if (routeName === 'Home') {
          sourceImage = require('../../../assets/icons-navi/beranda-icon.png');
        } else if (routeName === 'History') {
          sourceImage = require('../../../assets/icons-navi/riwayat-icon.png');
        } else if (routeName === 'Profile') {
          sourceImage = require('../../../assets/icons-navi/saya-icon.png');
        } else {
          sourceImage = require('../../../assets/icons-navi/pocket-icon.png');
        }

        return <Image style={focus} source={sourceImage} />;
      },
      tabBarOptions: {
        activeTintColor: '#7a7a7a',
        tabStyle: {
          paddingVertical: 7,
        },
        style: {
          backgroundColor: '#fafafa',
          height: 62,
          borderTopColor: '#e6e6e6',
        },
      },
    }),
  },
);

const TabNavigation = createAppContainer(BottomNavigator);
export default TabNavigation;
