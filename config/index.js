'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      "/bida-user": {
        // target: 'http://192.168.14.239:3000',     // 华华
        // target: 'http://192.168.14.84:3000',     // 温智鹏
        // target: 'http://192.168.14.236:8082/',       // 林伟强
        // target: 'http://192.168.14.232:8127/',       // 温志鹏
        // target:'http://192.168.14.239:8082/',           // 华华
        // target: 'http://134.175.127.207:22/api/',
        // target: "http://129.204.23.155:3000",
        target: "http://121.40.147.223/",
        // target: 'http://192.168.0.172:82/api/',
        // target: 'http://192.168.11.134:8081/platform/',
        // target: 'http://192.168.14.239:8081/',    //华华
        changeOrigin: true,
        pathRewrite: {
          "^/bida-user": "bida-user"
        }
      },
      "/tourWx": {
        // target: 'http://192.168.14.236:8082/',       // 林伟强
        // target: 'http://192.168.14.241:8127/',       // 温志鹏
        // target: 'http://134.175.127.207:22/api/',
        target: "https://gs.bndxqc.com/api/",
        // target: 'http://192.168.0.172:82/api/',
        // target: 'http://192.168.11.134:8081/platform/',
        // target: 'http://192.168.14.239:8082/',    //华华
        changeOrigin: true,
        pathRewrite: {
          "^/tourWx": "/tourWx"
        }
      },
      "/tourPlatform": {
        // target: 'http://47.107.78.114:82', //测试地址

        // target:'http://192.168.14.236:8082/',       // 林伟强

        // target:'http://192.168.14.240:8002', //罗少兴
        // target: 'http://192.168.14.236:8082/',       // 林伟强

        // target: 'http://192.168.14.84:8125/',       // 温志鹏
        // target: 'http://134.175.127.207:22/api/',
        target: "https://gs.bndxqc.com/api/", // 测试
        // target: "http://192.168.24.205:9001/Bonade-TourPlatform-Web/", // 华华
        // target: 'https://travel.bndxqc.com/', // zhengshi
        // target: 'http://192.168.0.172:82/api/',
        // target: 'http://192.168.11.134:8081/platform/',
        // target: "http://192.168.14.239:9002/Bonade-TourPlatform-Web", //华华
        // target: 'http://192.168.14.246:8080',        //育青
        changeOrigin: true,
        pathRewrite: {
          "^/tourPlatform": "/tourPlatform"
        }
      },
      '/user': {
        // target:'http://192.168.14.20:8071',       // 杨龙平
        // target:'http://129.204.23.155:8071',       // 杨龙平
        target: 'https://gs.bndxqc.com/api/', // 测试
        // target: 'http://129.204.23.155:3000/', // 测试
        // target: 'http://192.168.24.205:3000', // huahua
        changeOrigin: true,
        pathRewrite: {
          '^/user': '/user'
        }
      },
      '/finance': {
        // target: 'https://gs.bndxqc.com/api/', // 测试
        target: 'http://192.168.22.92:9001', // 测试
        changeOrigin: true,
        pathRewrite: {
          '^/finance': '/finance'
        }
      },
      '/supplier': {
        target: 'https://gs.bndxqc.com/api/', // 测试
        // target: 'http://119.23.205.21:9010', // 测试
        changeOrigin: true,
        pathRewrite: {
          '^/supplier': '/supplier'
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
