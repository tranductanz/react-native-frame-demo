import { BaseScreen } from '@/src/components/BaseScreen'
import React from 'react'
import { StyleSheet, Text } from 'react-native'

const ProfileScreen = () => {
    return (
        <BaseScreen>
            <Text>ProfileScreen</Text>
        </BaseScreen>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})