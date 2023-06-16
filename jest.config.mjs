import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
 
  testEnvironment: 'jest-environment-jsdom',
  // Configure module name mapper for path aliases
  
  moduleNameMapper: {
    '^@components/(.*)$': 'src/components/$1',
    '^@styles/(.*)$': 'src/styles/$1',
    '^@jestHelpers/(.*)$': '__test__/helpers/$1'
  },
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['__tests__/helpers/*']
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)