import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import MainTab from './MainTab';
import AuthStack from './authenNavigator';


const RootNavigation = () => {
    const RootStack = createNativeStackNavigator();
    const { user } = useAuth();
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {user
                ? <RootStack.Screen name="MainTab" component={MainTab} />
                : <RootStack.Screen name="Auth" component={AuthStack} />}
        </RootStack.Navigator>
    )
}

export default RootNavigation
