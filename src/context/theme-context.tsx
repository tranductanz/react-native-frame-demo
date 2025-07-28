// src/theme/ThemeContext.tsx
import React, { createContext, ReactNode, useState } from 'react';
import { AppTheme, darkTheme, lightTheme } from '../theme';

type ThemeType = 'light' | 'dark';

type ThemeContextType = {
    theme: AppTheme;
    mode: ThemeType;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<ThemeType>('dark');

    const toggleTheme = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    const theme = mode === 'dark' ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


