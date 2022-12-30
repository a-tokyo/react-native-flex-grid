module.exports = {
  preset: 'react-native',
  roots: ['src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/*.test.(ts|tsx)'],
  moduleNameMapper: {
    // Mocks out all these files formats when tests are run.
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!**/*.stories.{ts,tsx,js,jsx}',
    '!**/.storybook/**',
  ],
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 58,
      lines: 58,
      statements: 58,
    },
  },
};
