module.exports = {
  js: {
    externals: {
      jquery: 'jQuery'
    },
    loaders: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      }
    ]
  }
}
