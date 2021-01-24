module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    'transform-class-properties'
  ]
  // "husky": {
  //   "hooks": {
  //     "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
  //     "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
  //     "pre-commit": "lint-staged"
  //   }
  // },
}
