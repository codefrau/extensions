const packageJson = require("./package.json");

module.exports = {
  name: packageJson.name,
  displayName: packageJson.name,
  rootDir: "./",
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/__tests__/tsconfig.json",
    },
  },
  preset: "ts-jest",
  setupFiles: ["<rootDir>/__tests__/jest.setup.ts"],
  testMatch: ["**/__tests__/*.test.ts"],
  testPathIgnorePatterns: process.env.CI_TEST === "true" ? ["e2e"] : [],
  moduleNameMapper: {
    "firebase-admin/auth": "<rootDir>/node_modules/firebase-admin/lib/auth",
    "firebase-admin/app": "<rootDir>/node_modules/firebase-admin/lib/app",
    "firebase-admin/database":
      "<rootDir>/node_modules/firebase-admin/lib/database",
    "firebase-admin/firestore":
      "<rootDir>/node_modules/firebase-admin/lib/firestore",
    "firebase-admin/functions":
      "<rootDir>/node_modules/firebase-admin/lib/functions",
    "firebase-functions/v2": "<rootDir>/node_modules/firebase-functions/lib/v2",
    "firebase-admin/extensions":
      "<rootDir>/node_modules/firebase-admin/lib/extensions",
  },
};
