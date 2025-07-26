import { BaseScreen } from '@/src/components/BaseScreen';
import { useLoginViewModel } from '@/src/containers/Authen/viewmodel/useLoginViewModel';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper'; // Assuming you're using react-native-paper for Text component
const LoginScreen = () => {
    const { onLoginPress, onNavigateToRegister, } = useLoginViewModel();
    return (
        <BaseScreen>
            <View>
                <Text style={styles.textHeadLine} variant='headlineLarge'>Login</Text>
                {/*//! text input view */}
                <View>
                    <View>
                        <Text style={styles.titleTextInput}>Username</Text>
                        <TextInput
                            mode='outlined'
                            style={{
                                fontSize: 14,
                            }}
                            placeholder='Enter your Username'
                            placeholderTextColor={'#999'} // Optional: to style the placeholder text
                        />
                    </View>
                    <View>
                        <Text style={styles.titleTextInput}>Password</Text>
                        <TextInput
                            mode='outlined'
                            style={{
                                fontSize: 14,
                            }}
                            placeholder='Enter your Password'
                            placeholderTextColor={'#999'} // Optional: to style the placeholder text
                        />
                    </View>
                    <Button
                        style={{ borderRadius: 6, marginTop: 50, height: 50, justifyContent: 'center', }}
                        mode='contained'
                        onPress={onLoginPress}
                    >
                        Login
                    </Button>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 20, flexDirection: 'row' }}>
                        <Text style={{ color: '#999999', alignSelf: 'center' }}>
                            {` Don't have an account?`}
                        </Text>
                        <Button onPress={onNavigateToRegister}>Register</Button>
                    </View>
                </View>
            </View>
        </BaseScreen>
    )
}

export { LoginScreen };

const styles = StyleSheet.create({
    textHeadLine: {
        marginTop: 20,
        marginBottom: 35,
    },
    titleTextInput: {
        marginVertical: 10,
        fontSize: 14,
        fontWeight: '500',
    },
})