module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/airbnb'],
    rules: {
        'comma-dangle': ['error', 'never'],
        'max-len': ['warn', 80],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['warn', 4],
        semi: ['off', { omitLastInOneLineBlock: true }]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
