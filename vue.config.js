module.exports = {
  devServer: {
    port: 3000, // 端口
    overlay: {
      warnings: true,
      errors: false,
    },
    open: true,
  },
  chainWebpack: (config) => {
    config.module.rule('eslint').use('eslint-loader').options({ fix: true });
  },
};
