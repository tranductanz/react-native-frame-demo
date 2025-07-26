import { BaseScreen } from '@/src/components/BaseScreen';
import { useTheme } from '@/src/theme';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    const { theme, toggleTheme, mode } = useTheme();
    return (
        <BaseScreen>
            <View style={{ flex: 1, backgroundColor: theme.colors.background, padding: theme.spacing(2) }}>
                <Text style={{ color: theme.colors.text }}>Current mode: {mode}</Text>
                <Button title="Toggle Theme" onPress={toggleTheme} />
            </View>
        </BaseScreen>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})