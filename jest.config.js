const config = {
  setupFilesAfterEnv: ["jest-enzyme"],
  setupFiles: ["<rootDir>/src/setupTests.js"],
  setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.js"
};

module.exports = config;
