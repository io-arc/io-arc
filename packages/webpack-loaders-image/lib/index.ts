import { WS_IMG_PATH_ABSOLUTE } from '@io-arc/env'
import OutputDirDiff from '@io-arc/output-dir-diff'
import { TDirNameKey, TFileName } from '@io-arc/types'
import { siteRootRelative } from '@io-arc/utils'
import { RuleSetRule } from 'webpack'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

export const ImageLoader = (
  base: TDirNameKey[],
  target: TDirNameKey[],
  isHash: boolean
): RuleSetRule => {
  const dirDiff = new OutputDirDiff(base, target)
  const inputPath = new RegExp(`${WS_IMG_PATH_ABSOLUTE}/`)

  return {
    test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name(file: TFileName): TFileName {
            const arr = file.replace(inputPath, '').split('/')
            arr.pop()

            return `${arr.join('/')}/[name].[ext]${isHash ? '?[hash:6]' : ''}`
          },
          outputPath: dirDiff.targetRelativePath(),
          publicPath(url: string): TFileName {
            const p = url.replace(/^\//, '')
            return siteRootRelative(target) + p
          },
          esModule: false,
          emitFile: true
        }
      }
    ]
  }
}

export const ImageMinPlugin = new ImageMinimizerPlugin({
  test: /\.(jpe?g|png|gif|svg)$/i,
  severityError: 'warning',
  minimizerOptions: {
    plugins: [
      ['gifsicle', { interlaced: true }],
      ['jpegtran', { progressive: true }],
      ['optipng', { optimizationLevel: 5 }],
      ['svgo', { plugins: [{ removeViewBox: true }] }]
    ]
  }
})
