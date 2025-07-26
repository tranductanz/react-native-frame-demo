import React, { createContext, useEffect } from 'react';
import { axiosRequest } from '../services/axiosRequest';

type User = {
    id?: string;
    name?: string;
    email?: string;
};

type AuthContextType = {
    signUp: () => void;
    signOut: () => void;
    signIn: () => void;
    user?: User | null
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = React.useState<User | null>(null);
    const signUp = () => { }
    const signOut = () => { }
    const signIn = async () => {
        try {
            const result = await axiosRequest({
                baseURL: 'https://nyc.cloud.appwrite.io/v1',
                url: '/account/sessions/email',
                method: 'POST',
                data: {
                    "email": "tantran1610@gmail.com",
                    "password": "trantan1610"
                },
                headers: {
                    'content-type': 'application/json',
                    'X-Appwrite-Project': '68805604001f453e1f0e',
                }
            })
            console.log(result, 'resultresultresultresultresult')
        } catch (err) {
            if (err instanceof Error) {
                console.error("Error signing in:", err.message);
            } else {
                console.error("Error signing in:", err);
            }
        }
    }
    const getUser = () => {
        // isLoggedIn
        setUser(null)
    }
    useEffect(() => {
        getUser();
    }, [])
    return (
        <AuthContext.Provider value={{ signUp, signOut, signIn, user }}>
            {children}
        </AuthContext.Provider >
    )
}

export default AuthProvider