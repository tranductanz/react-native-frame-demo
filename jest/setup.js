/* global jest */
// jest/setup.js

// Setup for testing library
import '@testing-library/jest-dom';

// Mock global objects that may not exist in test environment
global.__ExpoImportMetaRegistry = {};
global.TextDecoder = class TextDecoder {
    decode() {
        return '';
    }
};
global.TextEncoder = class TextEncoder {
    encode() {
        return new Uint8Array();
    }
};

// Mock expo winter runtime
jest.mock('expo/src/winter/runtime.native', () => ({}));

// Mock expo modules
jest.mock('expo', () => {
    return {
        Constants: {
            platform: { ios: {}, android: {} },
        },
        Linking: {
            openURL: jest.fn(),
        },
    };
});

// Mock expo modules that might cause issues
jest.mock('expo-constants', () => ({
    Constants: {
        platform: { ios: {}, android: {} },
    },
}));

jest.mock('expo-font', () => ({
    loadAsync: jest.fn(),
    isLoaded: jest.fn(() => true),
}));

jest.mock('expo-haptics', () => ({
    impactAsync: jest.fn(),
}));

jest.mock('expo-image', () => ({
    Image: 'Image',
}));

jest.mock('expo-linking', () => ({
    openURL: jest.fn(),
}));

// Mock React Native modules
jest.mock('react-native/Libraries/Utilities/defineLazyObjectProperty', () => ({
    defineLazyObjectProperty: jest.fn(),
}));
