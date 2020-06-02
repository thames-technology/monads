module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.ts", "!./src/index.ts"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      // Will fail if there are more than 5 uncovered statements
      statements: -5
    }
  },
  preset: "ts-jest",
  testEnvironment: "node",
};