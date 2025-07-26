import { BaseScreen } from '@/src/components/BaseScreen';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

const SignUpScreen = () => {
    const navigation = useNavigation();
    return (
        <BaseScreen>
            <View>
                <Text style={styles.textHeadLine} variant='headlineLarge'>Sign Up</Text>
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
                        onPress={() => {

                        }}
                    >
                        Login
                    </Button>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 20, flexDirection: 'row' }}>
                        <Text style={{ color: '#999999', alignSelf: 'center' }}>
                            {`Already have an account?`}
                        </Text>
                        <Button onPress={() => { navigation.navigate('Login' as never) }}>Login</Button>
                    </View>
                </View>
            </View>
        </BaseScreen>
    )
}

export { SignUpScreen };

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