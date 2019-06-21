const config = {
  hooks: {
    "pre-commit": "tsc --noEmit && lint-staged"
  }
};

module.exports = config;
