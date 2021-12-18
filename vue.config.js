const webpack = require("webpack");

module.exports = {
  // devServer: {
  //   open: true, //是否自動打開瀏覽器
  //   https: true, //是否開啟https
  //   hotOnly: false,
  //   proxy: { // 配置跨域
  //    '/api': {
  //     target: 'https://opendata.cwb.gov.tw/api', //請求接口域名
  //     ws: true,
  //     secure: false,
  //     changOrigin: true, //是否允許跨越
  //     pathRewrite: {
  //      '^/api': ''
  //     }
  //    }
  //   },
  // },
  devServer: {
    open: true, //是否自動打開瀏覽器
    port: 1805, // 端口
    overlay: {
      warnings: true,
      errors: false,
    },
  },
  filenameHashing: false,
};
