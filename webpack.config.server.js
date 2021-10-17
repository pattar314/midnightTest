const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CURRENT_WORKING_DIR = process.cwd();
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin")


const stylesHandler = MiniCssExtractPlugin.loader;


const config = {
    name: "server",
    mode: 'development',
    entry: [
      path.join(CURRENT_WORKING_DIR , '/src/server/express.js')],
    target: "node",
    output: {
      path: path.join(CURRENT_WORKING_DIR , '/dist/'),
      filename: "server.generated.js",
      publicPath: '/dist/',
      libraryTarget: "commonjs2"
    },
    externals: [ nodeExternals() ],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new ReactRefreshWebpackPlugin(),
      new HtmlWebPackPlugin({ template: './webpack-template.html'})
  ],
    module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: [
              require("react-refresh/babel")
          // this line removes falsy values from the array
          ]
              }
        },
        {
        test: /\.css$/i,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
        exclude: /node_modules/
      },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
          type: 'asset'
          }
    ]
    }
}

module.exports = config
