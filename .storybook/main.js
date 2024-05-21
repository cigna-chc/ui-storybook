const path = require("path");
const { createScriptResolver } = require("@adobe/htlengine");

const resolver = createScriptResolver([path.resolve(__dirname)]);

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/theming",
    "@storybook/addon-a11y"
  ],
  staticDirs: [
    "../src/main/webpack/resources",
    "../src/main/webpack/static",
    "../static",
    "../src/main/webpack/core-components",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.handlebars|hbs$/,
      loader: "handlebars-loader",
      options: {
        ignoreHelpers: true,
        ignorePartials: [],
        rootRelative: "../src/main/webpack/",
        partialDirs: [path.join(__dirname, "../src/main/webpack/")]
      }
    });

    config.module.rules.push({
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
          },
        },
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                [
                  "autoprefixer",
                  {
                    // Options
                  },
                ],
              ],
            },
          },
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
            additionalData: `
              $env: ${process.env.NODE_ENV};
              $resource-path: ${process.env.RESOURCE_LOCAL_PATH};
            `,
          },
        },
      ],
      include: path.resolve(__dirname, "../src/main/webpack/"),
    });
    config.module.rules.push({
      test: /\.htl$/,
      use: ["htl-template-loader"]
    });

    // config.module.rules.push({
    //   test: /\.htl$/,
    //   use: [
    //     {
    //       loader: "htl-loader",
    //       options: {
    //         // Remove directives `@adobe/htlengine` does not understand
    //         transformSource: (source) => {
    //           const output = source
    //             .replace(/data-sly-use\.templates?="(.*?)"/g, "")
    //             .replace(/<sly[^>]+data-sly-call=(["']).*?\1.*?><\/sly>/g, "");

    //           return output;
    //         },
    //         // Allow for custom models in data from `use` directives
    //         transformCompiled: (compiled, settings) => {
    //           const output = compiled.replace(
    //             /(new Runtime\(\);)/,
    //             `$1
    //               const originalUse = runtime.use.bind(runtime);
    //               runtime.use = function(uri, options) {
    //                 const settings = Object.assign({
    //                   model: '${settings.model}'
    //                 }, options);
    //                 return originalUse(uri, settings);
    //               }`
    //           );

    //           return output;
    //         },
    //         scriptResolver: resolver,
    //         // includeRuntime: false
    //       },
    //     },
    //   ],
    // });

    config.experiments = {
      ...config.experiments,
      topLevelAwait: true
    };

    return config;
  },
  framework: {
    name: "@storybook/html-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};
