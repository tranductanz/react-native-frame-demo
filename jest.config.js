module.exports = {
    preset: 'jest-expo',
    setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
    testEnvironment: 'jsdom',
    moduleNameMapping: {
        '^@/(.*)$': '<rootDir>/$1',
    },
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native' +
        '|@react-native' +
        '|@react-navigation' +
        '|expo(nent)?' +
        '|expo-modules-core' +
        '|expo-constants' +
        '|expo-font' +
        '|expo-haptics' +
        '|expo-image' +
        '|expo-linking' +
        '|expo-router' +
        '|expo-splash-screen' +
        '|expo-status-bar' +
        '|expo-system-ui' +
        '|expo-web-browser' +
        '|react-redux' +
        '|@reduxjs/toolkit' +
        '|@expo/vector-icons' +
        ')',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
    },
};
