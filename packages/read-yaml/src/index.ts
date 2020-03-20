import PathBuild from '@io-arc/path-build'
import { TDirNameKey, TFileName } from '@io-arc/types'
import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'

/**
 * Read YAML file
 * @param name - filename
 * @param dir - array for directory name
 * @constructor
 */
export const ReadYaml = <T>(name: TFileName, dir: TDirNameKey[]): T => {
  const p = PathBuild.relative(dir)
  return yaml.safeLoad(fs.readFileSync(path.join(p, `${name}.yml`), 'utf8'))
}
