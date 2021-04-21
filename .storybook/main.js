module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    '../src/styles/index.scss', // scss
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    // '@storybook/addon-docs'
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        // babelOptions: {},
        // sourceLoaderOptions: null,
      },
    },
  ],
  typescript: {
  //   check: false,
  //   checkOptions: {},
    reactDocgen: 'react-docgen',
    // reactDocgen: 'react-docgen-typescript', // default
    // reactDocgenTypescriptOptions: {
    //   compilerOptions: {
    //     allowSyntheticDefaultImports: false,
    //     esModuleInterop: false,
    //   },
    // }
  //   reactDocgenTypescriptOptions: {
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
  //   },
  },
  refs: {
    'package-name': { disable: true }
  }
}