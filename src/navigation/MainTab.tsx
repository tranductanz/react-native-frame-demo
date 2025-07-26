import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import HomeScreen from '../containers/Home';
import ProfileScreen from '../containers/Profile';
import { useTheme } from '../theme';

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
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.border,
          position: 'absolute',
          bottom: 20,
          marginHorizontal: '5%',
          height: 70,
          borderRadius: 50,
          elevation: 5,
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.12,
          shadowRadius: 5,
        },
      }}
    >
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
          tabBarIcon: ({ color }) => <Icon name="plus" size={28} color="#fff" />,
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