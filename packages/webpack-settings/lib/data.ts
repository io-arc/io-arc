import { Configuration } from 'webpack'

export const webpackStatsDefault: Configuration['stats'] = {
  assets: true,
  assetsSort: 'field',
  cached: true,
  cachedAssets: true,
  children: false,
  chunks: false,
  chunkModules: false,
  chunkOrigins: false,
  chunksSort: 'field',
  colors: true,
  depth: false,
  entrypoints: false,
  errors: true,
  errorDetails: true,
  hash: undefined,
  modules: false,
  modulesSort: 'field',
  publicPath: true,
  reasons: false,
  source: true,
  timings: true,
  version: true,
  warnings: true
}

export const webpackPerformanceDefault: Configuration['performance'] = {
  hints: 'error',
  maxEntrypointSize: 5e6,
  maxAssetSize: 10e6
}
