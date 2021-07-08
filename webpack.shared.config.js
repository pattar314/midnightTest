const path = require("path")
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const nodeExternals = require('webpack-node-externals')

const stylesHandler = MiniCssExtractPlugin.loader;




const config = [{
    name: 'browser',
    devtool: 'eval-source-map',
    mode: 'development',
    entry: [
      'webpack-hot-middleware/client?reload=true',
      path.join(CURRENT_WORKING_DIR, "src/client/main.js")],
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist'),
        filename: "bundle.js",
        publicPath: '/dist/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new ReactRefreshWebpackPlugin()
    ],
    module: {
        rules: [ 
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
                type: 'asset',
                exclude: /node_modules/
            },
            {
            test: /\.css$/i,
            use: [stylesHandler, 'css-loader'],
            exclude: /node_modules/
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
                }
              ]
    }
}]

export default config