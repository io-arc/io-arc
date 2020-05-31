import { TGlobPattern } from '@io-arc/types'
import { red, white, green } from 'kleur'

/**
 * File create error log
 * @param filename
 * @param e
 * @constructor
 */
export const FileCreateError = (filename: string, e?: Error): void => {
  console.log(red(`Oops X(\nFile create failed for ${filename}`))

  if (e) console.error(e)
}

const completeSuffix = 'File create completed for '

// type: xx{xx}xx Glob pattern
const bracket = (glob: TGlobPattern): void => {
  const startIdx = glob.indexOf('{')
  const endIdx = glob.indexOf('}')
  const start = glob.substr(0, startIdx)
  const end = glob.substr(endIdx + 1)
  const _b = glob.substr(startIdx + 1, endIdx - 2)

  const body = _b.split(',')

  body.forEach((b) => {
    console.log(white(completeSuffix) + green(start + b + end))
  })
}

/**
 * File create success log
 * @param name
 * @constructor
 */
export const FileCreateSuccess = (name: string): void => {
  // Not Glob pattern
  if (!/{(.*)}/.test(name)) {
    console.log(white(completeSuffix) + green(name))
    return
  }

  bracket(name)
}
