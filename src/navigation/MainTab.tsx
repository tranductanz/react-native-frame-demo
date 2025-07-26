import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../containers/Home';
import ProfileScreen from '../containers/Profile';

const MainTab = () => {
  const MainTab = createBottomTabNavigator();
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 70,
          backgroundColor: '#333',
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 6,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#ccc',
        headerShown: false,
      }}>
      <MainTab.Screen name="Home" component={HomeScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  )
}

export default MainTab