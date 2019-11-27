import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import iPhone from './screens/iPhone';
import Mac from './screens/Mac';

const navigator = createStackNavigator({
  Home: HomeScreen,
  iPhone: iPhone,
  Mac: Mac,
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Apple Products',
    headerStyle: {
      backgroundColor: '#FFFFF1'
    }
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 


});
