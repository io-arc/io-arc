import { siteRootRelative, WS_IMG_PATH_ABSOLUTE } from '@io-arc/env'
import OutputDirDiff from '@io-arc/output-dir-diff'
import { TDirNameKey, TFileName } from '@io-arc/types'
import { RuleSetRule } from 'webpack'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pngquant = require('imagemin-pngquant')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const gifscale = require('imagemin-gifsicle')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const jpegtran = require('imagemin-jpegtran')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const svgo = require('imagemin-svgo')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const imageminLoader = require('imagemin-webpack').loader

export const ImageLoader = (
  base: TDirNameKey[],
  target: TDirNameKey[],
  isHash: boolean
): RuleSetRule => {
  const dirDiff = new OutputDirDiff(base, target)
  const inputPath = new RegExp(`${WS_IMG_PATH_ABSOLUTE}/`)

  return {
    test: /\.(png|jpe?g|gif|svg)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name(file: TFileName): TFileName {
            const arr = file.replace(inputPath, '').split('/')
            arr.pop()

            return `${arr.join('/')}/[name].[ext]${isHash ? '?[hash6]' : ''}`
          },
          outputPath: dirDiff.targetRelativePath(),
          publicPath(url: string): TFileName {
            const p = url.replace(/^\//, '')
            return siteRootRelative(target) + p
          },
          esModule: false,
          emitFile: true
        }
      },
      {
        loader: imageminLoader,
        options: {
          cache: true,
          bail: false,
          imageminOptions: {
            plugins: [
              gifscale({ interlaced: true }),
              jpegtran({ progressive: true }),
              pngquant({ quality: [0.8, 1] }),
              svgo({ removeViewBox: true })
            ]
          }
        }
      }
    ]
  }
}
