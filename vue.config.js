const { defineConfig } = require('@vue/cli-service')
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    devtool: "source-map", // Source map generation must be turned on
    plugins: [
      sentryWebpackPlugin({
        org: "neteasecloud-music",
        project: "vue-sentry",
        // Auth tokens can be obtained from https://sentry.io/orgredirect/organizations/:orgslug/settings/auth-tokens/
        authToken: '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',
      }),
  ],
  }
})
