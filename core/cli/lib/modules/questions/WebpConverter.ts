import { IfWebpConverterConfig, TDirNameKey } from '@io-arc/types'
import inquirer from 'inquirer'
import { bold, grey } from 'kleur'
import BaseQuestions, { IoQuestions } from './BaseQuestions'

interface IoWebpOptions {
  ext: {
    png: boolean
    jpg: boolean
    gif: boolean
  }
  deleteBefore: boolean
}

export default class WebpConverter extends BaseQuestions
  implements IoQuestions {
  #defaultOptions: IfWebpConverterConfig[] = [
    {
      target: ['src', 'img'],
      ext: { png: false, jpg: false, gif: false },
      output: ['src', 'img'],
      options: { quality: 75 },
      gifOptions: { quality: 75 },
      deleteBefore: true
    },
    {
      target: ['src', 'static'],
      ext: { png: false, jpg: false, gif: false },
      output: ['src', 'static'],
      options: { quality: 75 },
      gifOptions: { quality: 75 },
      deleteBefore: true
    }
  ]

  readonly #imgDir: string = ''
  readonly #staticDir: string = ''

  /**
   * Initialize
   * @param imgDir - Images directory name array
   * @param staticDir - Static directory name array
   */
  constructor(imgDir: TDirNameKey[], staticDir: TDirNameKey[]) {
    super()

    this.#imgDir = imgDir.join('/')
    this.#staticDir = staticDir.join('/')

    this.#defaultOptions[0].target = imgDir
    this.#defaultOptions[1].target = staticDir
  }

  public async questions(): Promise<void> {
    this.startLog('Using Webp converter')

    const res: { using: boolean } | number = await inquirer
      .prompt<{
        using: boolean
      }>({
        type: 'confirm',
        name: 'using',
        message: 'Do you want to use the Webp Converter?',
        suffix: `\n${grey('PNG, JPEG, GIF to Webp file convert')}`,
        default: false
      })
      .catch((e: Error): number => {
        console.error(e)
        return 1
      })

    if (typeof res === 'number') {
      this.fail()
      return
    }

    // Not using
    if (!res.using) return

    const arr = [this.#imgDir, this.#staticDir]
    let ops: IoWebpOptions = {
      ext: {
        png: true,
        jpg: true,
        gif: false
      },
      deleteBefore: true
    }

    for (let i = 0, len = arr.length; i < len; i++) {
      const more: IoWebpOptions | number = await this.#moreQuestions(
        arr[i],
        ops
      )

      if (typeof more === 'number') {
        this.fail()
        return
      }

      this.#updateDefault(i, more)

      // default option update
      ops = more
    }
  }

  public options(): IfWebpConverterConfig[] {
    return this.#defaultOptions
  }

  #moreQuestions = async (
    dir: TDirNameKey,
    { ext, deleteBefore }: IoWebpOptions
  ): Promise<IoWebpOptions | number> => {
    // this.startLog(`Case '${dir}'`)
    const { png, jpg, gif } = ext

    const res = await inquirer
      .prompt<{ ext: string[]; deleteBefore: boolean } | number>([
        {
          type: 'checkbox',
          name: 'ext',
          message: `Select a target webp convert file extensions with '${bold().green(
            dir
          )}'`,
          choices: [
            { name: 'PNG', checked: png, value: 'png' },
            { name: 'JPG(JPEG)', checked: jpg, value: 'jpg' },
            { name: 'GIF', checked: gif, value: 'gif' }
          ]
        },
        {
          type: 'confirm',
          name: 'deleteBefore',
          message:
            'Whether to delete the webp file when the task starts (Not delete when in watch task)',
          default: deleteBefore
        }
      ])
      .catch((e: Error): number => {
        console.error(e)
        return 1
      })

    if (typeof res === 'number') return res

    return {
      ext: {
        png: res.ext.includes('png'),
        jpg: res.ext.includes('jpg'),
        gif: res.ext.includes('gif')
      },
      deleteBefore: res.deleteBefore
    }
  }

  #updateDefault = (
    index: number,
    { ext, deleteBefore }: IoWebpOptions
  ): void => {
    this.#defaultOptions[index].ext = ext
    this.#defaultOptions[index].deleteBefore = deleteBefore
  }
}
