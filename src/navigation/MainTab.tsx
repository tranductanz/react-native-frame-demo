import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../containers/Home';
import ProfileScreen from '../containers/Profile';

const MainTab = () => {
  const MainTab = createBottomTabNavigator();
  return (
    <MainTab.Navigator >
      <MainTab.Screen name="Home" component={HomeScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  )
}

export default MainTab