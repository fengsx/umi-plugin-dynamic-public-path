// ref:
// - https://umijs.org/plugins/api
import { IApi } from 'umi';
import path from 'path';

export default function (api: IApi) {
  api.describe({
    key: 'dynamicPublicPath',
    config: {
      schema(joi) {
        return joi.object({
          polyfill: joi.boolean(),
        });
      },
    },
    enableBy: api.EnableBy.config,
  });

  api.chainWebpack((config, { webpack }) => {
    config.plugin('need-current-script-polyfill').use(webpack.DefinePlugin, [
      {
        'process.env.NEED_CURRENTSCRIPT_POLYFILL':
          api.config.dynamicPublicPath?.polyfill,
      },
    ]);
    return config;
  });

  api.addEntryImportsAhead(() => [
    {
      source: path.resolve(__dirname, './setPublicPath.js'),
    },
  ]);
}
