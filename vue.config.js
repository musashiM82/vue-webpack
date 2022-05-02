const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      filename: `[name].js`,
      chunkFilename: `[name].js`,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
        },
      },
    },
  },
});
