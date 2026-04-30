module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [  [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
        importSource: 'nativewind',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: { '@': './src' },
      },
    ],
    'react-native-worklets/plugin'],
};