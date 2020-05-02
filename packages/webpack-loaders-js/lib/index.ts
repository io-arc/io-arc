import { RuleSetRule } from 'webpack'
import { siteRootRelative } from '@io-arc/utils'
import { OUTPUT_JS_ARRAY, TSCONFIG } from '@io-arc/env'
import { TFileName } from '@io-arc/types'

/**
 * Read YAML file
 * Install 'json-loader' and 'yaml-loader'
 */
export const yamlLoader: RuleSetRule = {
  test: /\.ya?ml$/,
  type: 'json',
  use: 'yaml-loader'
  // TODO: remove json-loader ?
  // use: [{ loader: 'json-loader' }, { loader: 'yaml-loader' }]
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
  const options: { failOnError: boolean; configFile?: TFileName } = {
    failOnError: true
  }

  if (eslint !== '') options.configFile = eslint

  return {
    test: /\.(jsx?|tsx?|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    options,
    exclude: /node_modules/
  }
}
