import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/home';
import DetailsScreen from './screens/Details';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   <AppContainer/>
  );
}

const appStackNavigator = createStackNavigator(
  {
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        headerShown:false
      }
    },
    Details:{
      screen:DetailsScreen
    }
  },
  {initialRouteName:'Home'}
)

const AppContainer = createAppContainer(
  appStackNavigator
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
