import { TDirNameKey } from '@io-arc/types'
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
      php: boolean
    }
    js: {
      splitFilename: string
      eslint: string
      tsconfig?: string
    }
    fileLoader: IoLocalConfigOptionFileLoader
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
        }
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
   */
  public pugToPHP(engine: ALT_HTML_TYPE, ext: ALT_HTML_EXT): void {
    if (engine !== ALT_HTML_TYPE.PUG) return

    this.#data.options.pug = {
      php: ext === ALT_HTML_EXT.PHP
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

  /** HTML working directory */
  public wsHTML(): TDirNameKey {
    return this.#data.wsDir.html
  }

  /** JS working directory */
  public wsJS(): TDirNameKey {
    return this.#data.wsDir.js
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
        js: { minify: true, sourceMap: false },
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
      }
    ]
  }
}
