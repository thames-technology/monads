module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["./lib/**/*.ts", "!./lib/index.ts", "!./lib/**/*.deno.ts"],
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
