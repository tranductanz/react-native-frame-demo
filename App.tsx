import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import AuthProvider from './src/context/auth-context';
import RootNavigation from './src/navigation';
import { ThemeProvider } from './src/theme';
enableScreens();
const App = () => {
    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={styles.container}>
                <ThemeProvider>
                    <AuthProvider>
                        <NavigationContainer>
                            <RootNavigation />
                        </NavigationContainer>
                    </AuthProvider>
                </ThemeProvider>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})