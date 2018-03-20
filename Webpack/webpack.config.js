const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env , {mode}) => {

  return {
    output: {
      filename: (mode === 'production') ? '[name].[hash].min.js' : '[name].js',
    },
    plugins: [new HtmlWebpackPlugin()],
  };
};