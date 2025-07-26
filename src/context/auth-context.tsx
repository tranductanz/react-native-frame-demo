import React, { createContext, useEffect } from 'react';
import { useGlobal } from '../hooks/useGlobal';
import { axiosRequest } from '../services/axiosRequest';

type User = {
    id?: string;
    name?: string;
    email?: string;
};

type AuthContextType = {
    signUp: (dataInput: any) => void;
    signOut: () => void;
    signIn: (signIn: any) => void;
    user?: User | null;
    isLoadingUser?: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { setCookie, cookie } = useGlobal();
    const [user, setUser] = React.useState<User | null>(null);
    const [isLoadingUser, setIsLoadingUser] = React.useState<boolean>(false);
    const signUp = async (dataInput: any) => {
        try {
            console.log(dataInput, 'dataInputddsadasdasataInputdataInput');
            const result = await axiosRequest({
                baseURL: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT || '',
                url: '/account',
                method: 'POST',
                data: {
                    "userId": "unique()",
                    "email": dataInput?.username,
                    "password": dataInput?.password,
                    "name": 'Trần Tân'
                },
                headers: {
                    'content-type': 'application/json',
                    'X-Appwrite-Project': process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID || '',
                }
            })
            console.log(result, 'resultresultresultresultresult')
        } catch (error) {
            throw error
        }
    }
    const signOut = async () => {
        try {
            const result = await axiosRequest({
                baseURL: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT || '',
                url: '/account/sessions/current',
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'X-Appwrite-Project': process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID || '',
                }
            })
            if (result.status >= 200 && result.status < 300) {
                setUser(null);
                return;
            }
        } catch (error) {
            throw error
        }
    }
    const signIn = async (dataInput: any) => {
        try {
            const result = await axiosRequest({
                baseURL: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT || '',
                url: '/account/sessions/email',
                method: 'POST',
                data: {
                    "email": dataInput?.username,
                    "password": dataInput?.password
                },
                headers: {
                    'content-type': 'application/json',
                    'X-Appwrite-Project': '68805604001f453e1f0e',
                }
            })
            if (result?.headers?.['set-cookie']) {
                setCookie(result.headers['set-cookie'][0]);
            }
            setUser({
                name: 'Tan Tran',
                email: 'tantran16100@gmail.com',
                id: 'unique()',
            })
        } catch (error) {
            throw error
        }
    }
    const getUser = async () => {
        try {
            setIsLoadingUser(true);
            const result = await axiosRequest({
                baseURL: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT || '',
                url: '/account',
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'X-Appwrite-Project': process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID || '',
                    'Cookie': cookie // sử dụng cookie đã lưu
                }
            })
            if (result?.data && result.status >= 200 && result.status < 300) {
                setUser({
                    id: result.data.$id,
                    name: result.data.name,
                    email: result.data.email,
                });
                return;
            }
            setUser(null);

        } catch (error) {
            throw error
        } finally {
            setIsLoadingUser(false)
        }
    }
    useEffect(() => {
        getUser();
    }, [])
    return (
        <AuthContext.Provider value={{ signUp, signOut, signIn, user, isLoadingUser }}>
            {children}
        </AuthContext.Provider >
    )
}

export default AuthProvider