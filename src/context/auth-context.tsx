import React, { createContext, useEffect } from 'react';

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
    const signIn = () => { }
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