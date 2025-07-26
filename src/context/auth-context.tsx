import React, { createContext } from 'react';

type AuthContextType = {
    signUp: () => void;
    signOut: () => void;
    signIn: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const signUp = () => { }
    const signOut = () => { }
    const signIn = () => { }

    return (
        <AuthContext.Provider value={{ signUp, signOut, signIn }}>
            {children}
        </AuthContext.Provider >
    )
}

export default AuthProvider