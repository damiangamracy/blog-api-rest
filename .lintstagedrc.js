const config = {
  "**/*.ts": ["prettier --write", "eslint --fix", "git add"]
};

module.exports = config;
