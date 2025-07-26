import { BaseScreen } from '@/src/components/BaseScreen';
import { useTheme } from '@/src/hooks/useTheme';

import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useHomeViewModel } from './viewmodal/useHomeViewModel';

const HomeScreen = () => {
    const { loadTodos, todos, loading, error } = useHomeViewModel();

    useEffect(() => {
        loadTodos();
    }, []);

    console.log('Todos:', todos);
    console.log('Loading:', loading);
    console.log('Error:', error);

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