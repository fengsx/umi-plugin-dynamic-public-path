interface IOptions {
  polyfill?: boolean | null;
}

export default class DynamicPublicPathPlugin {
  options: IOptions = {};

  constructor(options: IOptions) {
    this.options = {
      polyfill: !!options?.polyfill,
    };
  }

  apply(compiler) {
    const { polyfill } = this.options;
    compiler.hooks.compilation.tap('DynamicPublicPathPlugin', compilation => {
      compilation.mainTemplate.hooks.requireExtensions.tap(
        'DynamicPublicPathPlugin',
        source => {
          return source.replace(
            /(__webpack_require__\.p) = (.*);/,
            `$1 = (function(o){
              o.toString = function() {
                if (typeof document !== 'undefined') {
                  var currentScript = (${
                    polyfill
                      ? require('@soda/get-current-script')
                      : function() {
                          return document.currentScript;
                        }
                  })();
                  var src = currentScript && currentScript.src;
                  if(src) {
                    $1 =  src.slice(0, src.lastIndexOf('/') + 1);
                    return $1;
                  }
                }
                return null;
              };
              return o;
            }({}))
            `,
          );
        },
      );
    });
  }
}
