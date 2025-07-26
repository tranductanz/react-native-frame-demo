
import { useAuth } from '@/src/hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export const useLoginViewModel = () => {
    const { signIn, signUp, signOut } = useAuth();
    const navigation = useNavigation();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);


    const onLogoutPress = async () => {
        try {
            setErrorMessage(null);
            setLoading(true);
            await signOut();
            // Navigate to SignIn screen

        } catch (e: any) {
            const msg = e?.message || 'Something went wrong';
            setErrorMessage(msg);
        } finally {
            setLoading(false);
            onRestartErrorMessage(); // tự động xóa message sau 3 giây
        }
    };
    const onRegisterPress = async (dataInput: any) => {
        try {
            console.log(dataInput, 'dataInputdataInputdataInput');
            setErrorMessage(null);
            setLoading(true);
            await signUp(dataInput);
            // Navigate to SignUp screen
        } catch (e: any) {
            const msg = e?.message || 'Something went wrong';
            setErrorMessage(msg);
        } finally {
            setLoading(false);
            onRestartErrorMessage();
        }
    }

    const onLoginPress = async (dataInput: any) => {
        try {
            setErrorMessage(null);
            setLoading(true);

            await signIn(dataInput);

        } catch (e: any) {
            const msg = e?.message || 'Something went wrong';
            setErrorMessage(msg);
        } finally {
            setLoading(false);
            onRestartErrorMessage(); // tự động xóa message sau 3 giây
        }
    };

    const onNavigateToRegister = () => {
        navigation.navigate('SignUp' as never);
    };

    const onNavigateToSignIn = () => {
        navigation.navigate('SignIn' as never);
    };

    const onRestartErrorMessage = () => {
        setTimeout(() => {
            setErrorMessage(null);
        }, 3000);
    }

    return {
        onLoginPress,
        onNavigateToRegister,
        onNavigateToSignIn,
        errorMessage, // 👉 truyền cho UI
        loading,      // 👉 có thể disable nút hoặc show spinner
        onRegisterPress,
        onLogoutPress
    };
};
