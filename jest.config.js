module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ['dotenv/config'],
    clearMocks: true,
    testTimeout: 15000,
    coverageProvider: 'babel',
    transform: {
      '^.+\\.(js|ts)$': 'ts-jest',
    },
    testPathIgnorePatterns: ['/node_modules/'],
  };
  