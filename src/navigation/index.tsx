import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainTab from './MainTab';


const RootNavigation = () => {
    const RootStack = createNativeStackNavigator();
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="MainTab" component={MainTab} />
        </RootStack.Navigator>
    )
}

export default RootNavigation
