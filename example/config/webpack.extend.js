module.exports = {
  // HTML(with handlebars) / Pug
  html: {},

  // CSS / SASS(SCSS) / Stylus
  css: {},

  // TypeScript / Babel / JavaScript framework
  js: {
    // See: https://webpack.js.org/configuration/externals/
    externals: {
      jquery: 'jQuery'
    },

    // See: https://webpack.js.org/configuration/module/#rule
    loaders: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      }
    ],

    // See: https://webpack.js.org/configuration/plugins/
    plugins: [new FooBar('aaa')]
  }
}
