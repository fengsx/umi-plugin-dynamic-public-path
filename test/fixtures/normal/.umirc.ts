export default {
  plugins: [require.resolve('../../../lib/')],
  dynamicPublicPath: {},
  chainWebpack(config, { webpack })  {
    config.plugin('plugin_name').use(webpack.DefinePlugin, [
      {
        'process.env.PLUGIN_NAME':
          JSON.stringify(require("../../../package.json").name),
      },
    ]);
    return config;
  }
}
