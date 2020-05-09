const path = require('path')
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['json'],
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  globals: {
    '@': false,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'max-len': 0,
    'linebreak-style': 0, // 不校验换行符
    semi: ['error', 'never'], // 不使用分号
    'no-debugger': 0,
    'no-console': 0,
    'no-new': 0,
    'no-underscore-dangle': 0,
    'prefer-promise-reject-errors': 0,
    'no-param-reassign': 0,
    'no-extend-native': 0,
    'no-tabs': 0,
    'import/prefer-default-export': 0, // 禁用强制使用默认导出
    // 'import/no-extraneous-dependencies': ['error', {
    //   devDependencies: true
    // }], // 禁止引入未添加到依赖中的库
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'global-require': 0,
    'import/order': 0,
    'no-lonely-if': 1, // 不允许else里面只有一个if
    'no-unused-expressions': ['error', {
      allowShortCircuit: true, // 允许在表达式中使用逻辑短路求值
      allowTernary: true, // 允许在表达式中使用类似逻辑短路求值的三元运算符
    }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', path.resolve(__dirname, 'src')],
        ]
      }
    },
  }
}