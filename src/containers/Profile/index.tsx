import { BaseScreen } from '@/src/components/BaseScreen'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useLoginViewModel } from '../Authen/viewmodel/useLoginViewModel'

const ProfileScreen = () => {
    const { onLogoutPress } = useLoginViewModel();
    return (
        <BaseScreen>
            <Text>ProfileScreen</Text>
            <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 20, flexDirection: 'row' }}>
                <Button onPress={onLogoutPress}>Đăng xuất</Button>
            </View>
        </BaseScreen>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})