module.exports = {
  // lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    port: 3000, // 端口
      overlay: {
        warnings: true,
        errors: false,
      },
    open: true,
    proxy: {    //配置跨域
     '/api': {
      target: 'https://opendata.cwb.gov.tw/api',   //這裡後台的地址模擬的，應該填寫真實的後台api
      ws: true,     // 如果要代理 websockets
      changOrigin: true,  //允許跨域
      pathRewrite: {
       '^/api': '' //請求的時候使用這個api就可以
      }
     }
  
    }
   },
  // devServer: {
  //   open: true, //是否自動打開瀏覽器
  //   port: 1805, // 端口
  //   overlay: {
  //     warnings: true,
  //     errors: false,
  //   },
  // },
  // chainWebpack: (config) => {
  //   config.module
  //     .rule('eslint')
  //     .use('eslint-loader')
  //     .options({
  //       fix: true,
  //     });
  // },
  filenameHashing: false,
};
