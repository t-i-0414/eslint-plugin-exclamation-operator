module.exports = {
  preset: "ts-jest",
  testMatch: ["**/tests/**/*.ts"],
  transform: {
    "^.+\\.[tj]?sx?$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.test.json",
      },
    ],
  },
};
