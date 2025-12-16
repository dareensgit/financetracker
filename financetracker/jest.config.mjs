export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.js'],
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testMatch: ['**/__tests__/**/*.test.[jt]sx'],
}


