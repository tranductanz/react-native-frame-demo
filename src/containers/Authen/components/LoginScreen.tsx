import { BaseScreen } from '@/src/components/BaseScreen';
import { useLoginViewModel } from '@/src/containers/Authen/viewmodel/useLoginViewModel';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper'; // Assuming you're using react-native-paper for Text component
const LoginScreen = () => {
    const { onLoginPress, onNavigateToRegister, errorMessage, onLogoutPress } = useLoginViewModel();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <BaseScreen>
            <View>
                <Text style={styles.textHeadLine} variant='headlineLarge'>Login</Text>
                {/*//! text input view */}
                <View>
                    <View>
                        <Text style={styles.titleTextInput}>Username</Text>
                        <TextInput
                            autoCapitalize='none'
                            keyboardType='email-address'
                            onChangeText={setUsername}
                            mode='outlined'
                            style={{
                                fontSize: 14,
                            }}
                            placeholder='Enter your Email'
                            placeholderTextColor={'#999'} // Optional: to style the placeholder text
                        />
                    </View>
                    <View>
                        <Text style={styles.titleTextInput}>Password</Text>
                        <TextInput
                            autoCapitalize='none'
                            onChangeText={setPassword}
                            mode='outlined'
                            style={{
                                fontSize: 14,
                            }}
                            placeholder='Enter your Password'
                            placeholderTextColor={'#999'} // Optional: to style the placeholder text
                        />
                    </View>
                    <View>
                        {errorMessage ? (
                            <Text style={{ color: 'red', marginTop: 10 }}>{errorMessage}</Text>
                        ) : null}
                    </View>
                    <Button
                        style={{ borderRadius: 6, marginTop: 50, height: 50, justifyContent: 'center', }}
                        mode='contained'
                        onPress={() => onLoginPress({ username, password })}
                    >
                        Login
                    </Button>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 20, flexDirection: 'row' }}>
                        <Text style={{ color: '#999999', alignSelf: 'center' }}>
                            {` Don't have an account?`}
                        </Text>
                        <Button onPress={onNavigateToRegister}>Register</Button>
                    </View>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 20, flexDirection: 'row' }}>
                        <Button onPress={onLogoutPress}>Đăng xuất</Button>
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