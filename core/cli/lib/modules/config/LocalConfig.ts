import { IfWebpConverterConfig, TDirNameKey } from '@io-arc/types'
import { TerserPluginOptions } from 'terser-webpack-plugin'
import { IoTemplateFiles, templateDir } from '../Files'
import { ALT_HTML_EXT, ALT_HTML_TYPE } from '../questions/AltHtml'
import { ALT_JS_TYPE, JS_FRAMEWORK } from '../questions/AltJs'
import { IoDeploySetting } from '../questions/DeploySetting'
import BaseConfig from './BaseConfig'

interface IoLocalConfigOption {
  html: {
    minify: boolean
  }

  css: {
    minify: boolean
  }

  js: {
    minify: boolean
    sourceMap: boolean
    terser?: TerserPluginOptions
  }

  json: {
    minify: boolean
  }
}

interface IoLocalConfigOptionFileLoader {
  html: {
    use: boolean
    hash: boolean
    target: { tag: string; attribute: string; type: string }[]
  }

  css: {
    use: boolean
    hash: boolean
  }

  js: {
    use: boolean
    hash: boolean
  }

  vue?: {
    use: boolean
    loader: { [p: string]: string | string[] }
  }
}

interface IoLocalConfigBase {
  /** Build output directory */
  outputDir: string

  wsDir: {
    /** Copy working space */
    static: string

    /** HTML working space */
    html: string

    /** CSS working space */
    css: string

    /** JavaScript working space */
    js: string

    /** file-loader working directory */
    img: string

    /** YAML to JSON working directory */
    yaml2json: string
  }

  deployDir: IoDeploySetting

  options: {
    pug?: {
      php?: boolean
      lint?: string
      vuePugLint?: string
    }
    css: {
      postcss: {
        mqpacker: boolean
      }
    }
    js: {
      splitFilename: string
      eslint: string
      tsconfig?: string
    }
    fileLoader: IoLocalConfigOptionFileLoader
    imagemin: [string, object][]
    webp?: IfWebpConverterConfig[]
  }
}

export default class LocalConfig extends BaseConfig {
  readonly #data: IoLocalConfigBase

  constructor(deployDir: IoDeploySetting) {
    super()

    this.#data = {
      outputDir: 'dist',
      wsDir: {
        static: 'static',
        html: 'html',
        css: 'css',
        js: 'js',
        img: 'img',
        yaml2json: 'yaml2json'
      },
      deployDir,
      options: {
        css: {
          postcss: { mqpacker: true }
        },
        js: {
          splitFilename: 'asset',
          eslint: '.eslintrc.yml'
        },
        fileLoader: {
          html: {
            use: true,
            hash: true,
            target: [
              { tag: 'img', attribute: 'src', type: 'src' },
              { tag: 'img', attribute: 'srcset', type: 'srcset' },
              { tag: 'img', attribute: 'data-src', type: 'src' },
              { tag: 'img', attribute: 'data-srcset', type: 'srcset' },
              { tag: 'source', attribute: 'src', type: 'src' }
            ]
          },
          css: {
            use: true,
            hash: true
          },
          js: {
            use: true,
            hash: true
          }
        },
        imagemin: [
          ['gifsicle', { interlaced: true, optimizationLevel: 1, colors: 256 }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          ['svgo', { plugins: [{ removeViewBox: true }] }]
        ]
      }
    }
  }

  /** Working directories */
  public workingDirectories(): string[] {
    const arr: string[] = []

    const keys: string[] = Object.keys(this.#data.wsDir)
    keys.forEach((key) => {
      arr.push(this.#data.wsDir[key as keyof IoLocalConfigBase['wsDir']])
    })

    return arr
  }

  /**
   * Using Pug and build extension to PHP
   * @param engine - HTML template engine
   * @param ext - build extension
   * @param jsFramework - Use JavaScript framework
   */
  public pugToPHP(
    engine: ALT_HTML_TYPE,
    ext: ALT_HTML_EXT,
    jsFramework: JS_FRAMEWORK
  ): void {
    if (engine === ALT_HTML_TYPE.PUG) {
      this.#data.options.pug = {
        php: ext === ALT_HTML_EXT.PHP,
        lint: '.pug-lintrc.json'
      }
    }

    if (jsFramework === JS_FRAMEWORK.VUE) {
      if (this.#data.options.pug === undefined) this.#data.options.pug = {}
      this.#data.options.pug.vuePugLint = 'config-vue/.pug-lintrc.json'
    }
  }

  /**
   * Using TypeScript
   * @param preprocessor - JavaScript preprocessor
   */
  public tsconfig(preprocessor: ALT_JS_TYPE): void {
    if (preprocessor !== ALT_JS_TYPE.TS) return

    this.#data.options.js.tsconfig = 'tsconfig.json'
  }

  /**
   * Use JavaScript framework
   * @param framework
   */
  public jsFramework(framework: JS_FRAMEWORK): void {
    if (framework === JS_FRAMEWORK.VUE) {
      this.#data.options.fileLoader.vue = {
        use: true,
        loader: {
          video: ['src', 'poster'],
          source: 'src',
          img: 'src'
        }
      }
      return
    }

    return
  }

  public webp(options: IfWebpConverterConfig[]): void {
    this.#data.options.webp = options
  }

  /** HTML working directory */
  public wsHTML(): TDirNameKey {
    return this.#data.wsDir.html
  }

  /** CSS working directory */
  public wsCSS(): TDirNameKey {
    return this.#data.wsDir.css
  }

  /** JS working directory */
  public wsJS(): TDirNameKey {
    return this.#data.wsDir.js
  }

  /** Image working directory */
  public wsImg(): TDirNameKey {
    return this.#data.wsDir.img
  }

  /** Static working directory */
  public wsStatic(): TDirNameKey {
    return this.#data.wsDir.static
  }

  /** YAML file create */
  public async create(): Promise<void> {
    await super.create('local', this.#data)

    await super.create<{ options: IoLocalConfigOption }>('local-development', {
      options: {
        html: { minify: false },
        css: { minify: false },
        js: { minify: false, sourceMap: true },
        json: { minify: false }
      }
    })

    await super.create<{ options: IoLocalConfigOption }>('local-production', {
      options: {
        html: { minify: true },
        css: { minify: true },
        js: {
          minify: true,
          terser: {
            parallel: true,
            extractComments: false,
            // eslint-disable-next-line @typescript-eslint/camelcase
            terserOptions: { compress: { drop_console: true } }
          },
          sourceMap: false
        },
        json: { minify: true }
      }
    })
  }

  /**
   * Get template files
   */
  public template(): IoTemplateFiles[] {
    return [
      {
        source: `${templateDir}/img/README.md`,
        output: `src/${this.#data.wsDir.img}`
      },
      {
        source: `${templateDir}/static/README.md`,
        output: `src/${this.#data.wsDir.static}`
      },
      {
        source: `${templateDir}/yaml2json/README.md`,
        output: `src/${this.#data.wsDir.yaml2json}`
      }
    ]
  }
}
