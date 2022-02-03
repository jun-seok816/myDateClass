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
const path = require('path')
const { merge : mv_Merge } = require('webpack-merge')
const mv_Webpack_Base = require('./webpack.config.base')
const mv_Env = process.env.NODE_ENV || 'development'

console.log('%s process.env.NODE_ENV="%s"',__filename,process.env.NODE_ENV);

//                                                       +=============================
//=======================================================+ config
//                                                       +=============================

const mv_Result = mv_Merge(
    mv_Webpack_Base,
    {
      mode: mv_Env,

        //                                          +-------------------------
        // -----------------------------------------+ target
        //                                          +-------------------------
        // https://webpack.js.org/configuration/target
        // webpack 이 web 환경용으로 동작하도록 설정, (hdr, 2020.12.28)
        target: 'web',

        //                                          +-------------------------
        // -----------------------------------------+ entry
        //                                          +-------------------------
        entry: {
            "index" : './demo/index.tsx',
        },

        //                                          +-------------------------
        // -----------------------------------------+ output
        //                                          +-------------------------
        // https://webpack.kr/configuration/output/#outputlibrary
        output: {
            library:  {
              // Web Browser 의 Windows.esLib 변수 가 생성되도록 한다.
              name : 'jsLib',
              type : 'umd',
    
              // Web Browser 의 Windows.esLib 에 Class 또는 Module 을 노출 하도록 한다.
              umdNamedDefine : true,
            },
            //globalObject: 'this',
            path: path.resolve(__dirname, './demo/dist'),
            publicPath: '/demo/dist',
            filename: '[name].js',
            clean : true,
            //chunkFormat: 'commonjs'
        },


        //                                          +-------------------------
        // -----------------------------------------+ devServer
        //                                          +-------------------------
        // https://webpack.js.org/configuration/dev-server/
        devServer: {
          historyApiFallback: {
            rewrites : [
              { from: /^\/$/, to: 'index.html' }
            ]
          },
          static : [
            {
              directory: path.resolve(__dirname, './demo'),
              publicPath: '/',
              watch: true,
            },
            {
              directory: path.resolve(__dirname, './src'),
              publicPath: '/jsLib',
              watch: true,
            },
          ],

          // https://github.com/webpack/webpack-dev-middleware
          devMiddleware: {
            index: true,
            publicPath: '/',
            // serverSideRender: true,
            writeToDisk: true,  // 파일로 저장을 해야 웹브라우저에 새로운 Build 가 전달 된다.
          },

          client : {
            progress : true,
            overlay: true,
          },

          hot: true,  // HMR 을 켠다.
          compress: false,
        },

      }
);

//                                                       +=============================
//=======================================================+ exports
//                                                       +=============================
module.exports = mv_Result;
