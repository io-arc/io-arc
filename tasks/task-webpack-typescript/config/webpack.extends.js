const TaskMessage = require('@io-arc/webpack-plugins-task-message')

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
    ],
    plugins: [new TaskMessage('hello'), new TaskMessage('OK')]
  }
}
