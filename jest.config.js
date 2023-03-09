const { defaults } = require('jest-config');

/** @type {import('jest').Config} */
const config = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
    testEnvironment: 'jsdom',
    setupFiles: ['jest-webgl-canvas-mock'],
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
};

module.exports = config;