module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          '@assets': './App/assets',
          '@components': './App/components',
          '@i18n': './App/i18n',
          '@redux': './App/redux',
          '@routes': './App/routes',
          '@scenes': './App/scenes',
          '@saga': './App/saga',
          '@services': './App/services',
          '@config': './App/config',
          '@utils': './App/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
