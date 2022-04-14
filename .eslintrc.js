module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:tailwindcss/recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': 'off', // 程式碼長度
    'no-param-reassign': 'off', // 關掉 禁止對函数参数賦值
    'vue/multi-word-component-names': 'off', // 關掉 component name 命名
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-custom-classname': 'off', // 可以自定義命名
    'tailwindcss/no-contradicting-classname': 'error',
  },
};
