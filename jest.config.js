//jest.config.js
module.exports = {
    transform: {
      "^.+\\.js$": "babel-jest",
      "^.+\\.vue$": "vue-jest"
    },
    collectCoverage: true,
    collectCoverageFrom: [
      "**/*.{js,vue}",
      "!**/node_modules/**",
      "!**/vendor/**",
      "!**/coverage/**",
      "!**/*.config.*",
      "!src/main.js"
    ]
  };