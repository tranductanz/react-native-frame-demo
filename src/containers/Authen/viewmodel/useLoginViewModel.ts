// src/hooks/useLoginViewModel.ts

import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useAuth } from '../../../hooks/useAuth';

export const useLoginViewModel = () => {
    const { signIn } = useAuth();
    const navigation = useNavigation();

    const onLoginPress = async () => {
        try {
            await signIn(); // hoặc truyền email/password
        } catch (e: any) {
            Alert.alert('Login failed', e?.message || 'Something went wrong');
        }
    };

    const onNavigateToRegister = () => {
        navigation.navigate('SignUp' as never);
    };

    const onNavigateToSignIn = () => {
        navigation.navigate('SignIn' as never);
    };

    return {
        onLoginPress,
        onNavigateToRegister,
        onNavigateToSignIn,
    };
};
