// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	// 语句结束不加分号，报错		
    'semi': ["error","always"],
    //缩进
    'indent': 0,
    'no-tabs': "off",
    // var const let 的声明
    'one-var': ["error","always"],
    'no-mixed-spaces-and-tabs':0
  }
}
