import { DIST, DUMMY_FILES_DIRECTORY } from '@io-arc/env'
import rimraf from 'rimraf'
import { Compiler } from 'webpack'

const remove = (): void => {
  rimraf(`${DIST}/${DUMMY_FILES_DIRECTORY}`, (error): void => {
    if (error) console.log(error)
  })
}

export default class DustRemovePlugin {
  public apply(compiler: Compiler): void {
    compiler.hooks.done.tap('DustRemovePlugin', (): void => {
      remove()
    })
  }
}
