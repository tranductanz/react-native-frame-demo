import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const HomeProfile = () => {
    return (
        <View style={styles.wrapperHeader}>
            <Feather name="menu" size={24} color="#ffffff" />
            <Text style={[styles.baseColor]} variant='headlineMedium'>Index</Text>
            <View style={{ width: 42, height: 42, backgroundColor: 'red', borderRadius: 21 }} />
        </View>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    wrapperHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 42,
        marginVertical: 10,
    },
    baseColor: {
        color: '#ffffff',
    }

})