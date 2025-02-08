/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // testMatch: [
  //   '**/tests/**/*.test.[jt]s?(x)',
  // ],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: [],

  // The test environment that will be used for testing
  // testEnvironment: 'jsdom',

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },

  // Set timeout 10 seconds for all test
  testTimeout: 10000,
};

module.exports = config;
