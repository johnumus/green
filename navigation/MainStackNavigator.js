import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native';

import { theme } from '../constants';

import {Welcome} from '../screens/Welcome';
import {Forgot} from '../screens/Forgot';
import {Register} from '../screens/Register';
import {Products} from '../screens/Products';

export const ScreensStack = createStackNavigator({
  // Welcome,
  // Forgot,
  // Register,
  Products,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      height: theme.sizes.base * 3,
      backgroundColor: theme.colors.white, // or 'white
      borderBottomColor: "transparent",
      elevation: 0, // for android
    },
    headerTintColor: 'white',
    headerBackImage: <Image 
      style={{margin: 10}}
      source={require('../assets/icons/back.png')} 
    />,
    headerBackTitle: null,
    headerLeftContainerStyle: {
      alignItems: 'center',
      marginLeft: theme.sizes.base * 1,
      paddingRight: theme.sizes.base,
    },
    headerRightContainerStyle: {
      alignItems: 'center',
      paddingRight: theme.sizes.base,
    }
  }
});
