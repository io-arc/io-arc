import { RuleSetRule } from 'webpack'
import { siteRootRelative } from '@io-arc/utils'
import { OUTPUT_JS_ARRAY, TSCONFIG } from '@io-arc/env'
import { TFileName } from '@io-arc/types'

/**
 * Read YAML file
 * Install 'yaml-loader'
 */
export const yamlLoader: RuleSetRule = {
  test: /\.ya?ml$/,
  type: 'json',
  use: 'yaml-loader'
}

/**
 * Web Worker loader
 * Install 'worker-loader'
 */
export const workerLoader: RuleSetRule = {
  test: /\.worker\.(jsx?|tsx?)$/,
  use: [
    {
      loader: 'worker-loader',
      options: {
        publicPath: siteRootRelative(OUTPUT_JS_ARRAY),
        name: '[name].js'
      }
    }
  ]
}

/**
 * Babel loader
 * Install 'babel-loader', '@babel/core' and '@babel/preset-env'
 */
export const babelLoader: RuleSetRule = {
  test: /\.jsx?$/,
  loader: 'babel-loader'
}

/**
 * TypeScript loader
 * Install 'ts-loader'
 *
 * @param vue - use Vue.js (optional)
 * @constructor
 */
export const TypescriptLoader = (vue = false): RuleSetRule => {
  const options: {
    transpileOnly: boolean
    configFile: TFileName
    appendTsSuffixTo?: RegExp[]
  } = {
    transpileOnly: true,
    configFile: TSCONFIG
  }

  if (vue) options.appendTsSuffixTo = [/\.vue$/]

  return {
    test: /\.tsx?$/,
    use: [{ loader: 'ts-loader', options: options }],
    exclude: /node_modules/
  }
}

/**
 * ESLint loader
 * Install 'eslint-loader'
 *
 * @param eslint - eslint file path (optional)
 * @constructor
 */
export const EslintLoader = (eslint: TFileName = ''): RuleSetRule => {
  const options: {
    failOnError: boolean
    useEslintrc?: boolean
    configFile?: TFileName
  } = {
    failOnError: true
  }

  if (eslint !== '') {
    options.useEslintrc = false
    options.configFile = eslint
  }

  return {
    test: /\.(jsx?|tsx?|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    options,
    exclude: /node_modules/
  }
}
