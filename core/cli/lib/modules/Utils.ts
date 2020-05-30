import { red } from 'kleur'

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
