// ref:
// - https://umijs.org/plugins/api
import { IApi } from '@umijs/types';
import DynamicPublicPathPlugin from './dynamicPlugin';

export default function(api: IApi) {
  api.describe({
    key: 'dynamicPublicPath',
    config: {
      default: {
        polyfill: true,
      },
      schema(joi) {
        return joi.object({
          polyfill: joi.boolean(),
        });
      },
    },
    enableBy: api.EnableBy.config,
  });
  api.chainWebpack(config => {
    config.plugin('DynamicPublicPathPlugin').use(DynamicPublicPathPlugin, [
      {
        polyfill: api.config.dynamicPublicPath?.polyfill,
      },
    ]);

    return config;
  });
}
