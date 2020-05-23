module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/lib', '<rootDir>/tests'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/tests/.*(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/**.{ts,tsx}',
    '!**/_*.{ts,tsx}',
    '!**/node_modules/**'
  ],
  testURL: 'http://127.0.0.1/',
  verbose: true,
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
}
