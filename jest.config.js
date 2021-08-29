module.exports = {
  testEnvironment: 'jsdom',

  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)',
    '!src/**/_*.ts(x)',
    '!**/node_modules',
  ],
}
