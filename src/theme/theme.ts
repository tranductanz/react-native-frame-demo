// src/theme/themes.ts
export const lightTheme = {
    dark: false,
    colors: {
        background: '#ffffff',
        text: '#222222',
        primary: '#4f46e5',
        card: '#f3f4f6',
        border: '#e5e7eb',
    },
    spacing: (factor: number) => factor * 8,
    statusBarStyle: 'dark-content' as const,
};

export const darkTheme = {
    dark: true,
    colors: {
        background: '#121212',
        text: '#ffffff',
        primary: '#6366f1',
        card: '#1e1e1e',
        border: '#333333',
    },
    spacing: (factor: number) => factor * 8,
    statusBarStyle: 'light-content' as const,
};

export type AppTheme = typeof lightTheme;
