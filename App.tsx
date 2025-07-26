import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import RootNavigation from './src/navigation';
import { ThemeProvider } from './src/theme';
enableScreens();
const App = () => {

    return (
        <GestureHandlerRootView style={styles.container}>
            <ThemeProvider>
                <NavigationContainer>
                    <RootNavigation />
                </NavigationContainer>
            </ThemeProvider>
        </GestureHandlerRootView>

    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})