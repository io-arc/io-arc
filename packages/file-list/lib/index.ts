import glob from 'glob'
import { TDirNameKey, TFilePath } from '@io-arc/types'

/**
 * Get file list for directory
 * @param dir - directory
 * @param ext - file extension
 * @param rootOnly - one level only
 * @constructor
 */
export const FileListObject = (
  dir: TDirNameKey,
  ext: string,
  rootOnly = false
): { [p: string]: TFilePath } => {
  const target = rootOnly ? `${dir}/[!_]*.${ext}` : `${dir}/**/[!_]*.${ext}`
  const files = glob.sync(target)
  const reg1 = new RegExp(`${dir}/`)
  const reg2 = new RegExp(`.${ext}$`)
  const entries: { [p: string]: TFilePath } = {}

  files.forEach((file: TFilePath) => {
    const key = file.replace(reg1, '').replace(reg2, '')
    entries[key] = file
  })

  return entries
}
