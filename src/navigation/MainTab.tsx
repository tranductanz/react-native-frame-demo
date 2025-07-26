import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import HomeScreen from '../containers/Home';
import ProfileScreen from '../containers/Profile';
import { useTheme } from '../hooks/useTheme';

const CustomTabBarButton = ({ children, onPress }: any) => (
  <TouchableOpacity
    style={styles.customButton}
    onPress={onPress}
  >
    <View style={styles.customButtonInner}>{children}</View>
  </TouchableOpacity>
);

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
          position: 'absolute',
          bottom: 20,
          marginHorizontal: '5%',
          borderRadius: 25,
          elevation: 5, // Android shadow
          shadowColor: '#333',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          borderColor: theme.colors.border, // Optional border color
          borderWidth: 1,
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
        tabBarIconStyle: { marginTop: 5 },
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
          tabBarIcon: () => <MaterialCommunityIcons name="plus" size={28} color="#fff" />,
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
        tabBarIconStyle: { marginTop: 5 },
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

const styles = StyleSheet.create({
  customButton: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  customButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#9b8efb',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default MainTab