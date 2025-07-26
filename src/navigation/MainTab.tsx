import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../containers/Home';
import ProfileScreen from '../containers/Profile';
import { useTheme } from '../theme';

const MainTab = () => {
  const MainTab = createBottomTabNavigator();
  const { theme } = useTheme();
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 70,
          backgroundColor: theme.colors.card,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 6,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        headerShown: false,
      }}>
      <MainTab.Screen options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" size={24} color={color} />
        )
      }}
        name="Home"
        component={HomeScreen}
      />

      <MainTab.Screen
        name="Add"
        component={() => null}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => <Icon name="plus" size={28} color="#fff" />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); // ngăn chuyển screen
            console.log('Add button pressed');
            // mở modal hoặc navigate tùy bạn
          },
        }}
      />



      <MainTab.Screen options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" size={24} color={color} />
        )
      }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  )
}

export default MainTab