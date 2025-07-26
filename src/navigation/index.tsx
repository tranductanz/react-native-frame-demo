import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useAuth } from '../hooks/useAuth';
import MainTab from './MainTab';
import AuthStack from './authenNavigator';


const RootNavigation = () => {
    const RootStack = createNativeStackNavigator();
    const { user, isLoadingUser } = useAuth();
    if (isLoadingUser) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {user
                ? <RootStack.Screen name="MainTab" component={MainTab} />
                : <RootStack.Screen name="Auth" component={AuthStack} />}
        </RootStack.Navigator>
    )
}

export default RootNavigation
