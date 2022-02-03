/**
 * root part
 *
 * @description
 * 		-
 *
 * @Revision
 *   00. Job    : Create
 *       Date   : 2022.1.10
 *       Worker : osjbox@gmail.com
 *       Note   :
 *
 */

//                                                       +=============================
//=======================================================+ import
//                                                       +=============================

const webpack = require('webpack')
const mv_Path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin }= require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//                                                       +=============================
//=======================================================+ config
//                                                       +=============================

const mv_Result = {

  //                                          +-------------------------
  // -----------------------------------------+ output
  //                                          +-------------------------
  output: {
    globalObject: 'this'
  },


  //                                          +-------------------------
  // -----------------------------------------+ resolve
  //                                          +-------------------------

  resolve: {
    alias: {
      '@jsLib': mv_Path.resolve(__dirname, 'src'),
      '@jsCss' : mv_Path.resolve(__dirname, 'css'),
    },

    extensions: ['.tsx','.ts','.jsx','.js','.json', '.css', '.scss', 'html'],

    // 2021.12.20
    // javascript 의 console 과 fs 을 사용하는경우 webpack 으로 Packaging 을 하는경우에
    // 오류가 발생한다. 이를 Packaging 하지 않고 무시하도로 설정함.
    fallback: {
      // https://www.npmjs.com/package/console-browserify
      //"console": require.resolve("console-browserify"),
      "console": false,
      "fs" : false,
    }
  },

  //                                          +-------------------------
  // -----------------------------------------+ module
  //                                          +-------------------------
  module: {
      rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use : [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
                }
              },
            ],
          },
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use : [
              {
                loader : 'ts-loader'
              }
            ],
          },
          {
            test: /\.(sc|c)ss$/,  // .scss .css
            use: [
              //'cache-loader',
              //MiniCssExtractPlugin.loader,
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.(png|jpg|gif|svg|html)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]'
            }
          }
      ]
  },

  //                                          +-------------------------
  // -----------------------------------------+ plugins
  //                                          +-------------------------
  // plugins: [
  //   new VueLoaderPlugin()
  // ],

  //                                          +-------------------------
  // -----------------------------------------+ performance
  //                                          +-------------------------
  performance: {
    hints: false
  },
  //                                          +-------------------------
  // -----------------------------------------+ devtool
  //                                          +-------------------------
  // https://webpack.js.org/configuration/devtool#devtool
  // source 맵 형태를 선택한다.
  devtool: 'inline-source-map',
  // devtool: 'inline-source-map',

  //                                          +-------------------------
  // -----------------------------------------+ optimization
  //                                          +-------------------------
  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimize: false,
  },

}

//                                                       +=============================
//=======================================================+ NODE_ENV
//                                                       +=============================

if (process.env.NODE_ENV === 'production') {
  //module.exports.devtool = 'inline-source-map'
  mv_Result.devtool = 'source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  mv_Result.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false
    })
  ])
}

//                                                       +=============================
//=======================================================+ exports
//                                                       +=============================
module.exports = mv_Result;
