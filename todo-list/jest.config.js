module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"], // Create this file if needed
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
};
