const { override, addWebpackAlias, addBabelPlugins } = require('customize-cra');

const path = require('path');

module.exports = override(
  addWebpackAlias({
    ['@features']: path.resolve(__dirname, './src/features'),
    ['@state']: path.resolve(__dirname, './src/features/state'),
    ['@common']: path.resolve(__dirname, './src/common'),
    ['@hooks']: path.resolve(__dirname, './src/hooks'),
    ['@data']: path.resolve(__dirname, './src/data'),
    ['@utils']: path.resolve(__dirname, './src/utils'),
    ['@pages']: path.resolve(__dirname, './src/pages'),
    ['@components']: path.resolve(__dirname, './src/components'),
  }),
  addBabelPlugins([
    'babel-plugin-styled-components',
    {
      fileName: false,
    },
  ]),
);
