// ref:
// - https://umijs.org/plugins/api
import { IApi } from 'umi';
import path from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const mfAsyncEntryFileName = 'asyncEntry.ts';

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
  let { dynamicPublicPath, mf } = api.userConfig;
  if (!dynamicPublicPath) {
    return;
  }

  api.chainWebpack((config, { webpack }) => {
    config.plugin('need-current-script-polyfill').use(webpack.DefinePlugin, [
      {
        'process.env.NEED_CURRENTSCRIPT_POLYFILL':
          api.config.dynamicPublicPath?.polyfill,
      },
    ]);
    return config;
  });

  if (mf) {
    api.register({
      key: 'onGenerateFiles',
      // ensure after generate tpm files
      stage: 10002,
      fn: async () => {
        if (api.env === 'development' && api.config.mfsu) {
          // skip mfsu already dynamic import
          return;
        }

        if (!api.config.mf) {
          return;
        }

        const fileTmpPath = join(
          api.paths.absTmpPath,
          'plugin-mf',
          mfAsyncEntryFileName,
        );
        const content = readFileSync(fileTmpPath, 'utf-8');

        writeFileSync(
          fileTmpPath,
          [
            `import "${path.resolve(__dirname, './setPublicPath.js')}"`,
            content,
          ].join('\n'),
          'utf-8',
        );
      },
    });
  }
  api.addEntryImportsAhead(() => [
    {
      source: path.resolve(__dirname, './setPublicPath.js'),
    },
  ]);
}
