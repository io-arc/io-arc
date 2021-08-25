import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import {
  name,
  description,
  homepage,
  author,
  license,
  version
} from './package.json'
import { year, repository } from '../../lerna.json'
import json from '@rollup/plugin-json'
import { banner } from '../../utils/banner'

const start = 2020
const year$ = year > start ? `${start}-${year}` : start

export default {
  input: 'lib/index.ts',

  output: {
    file: 'bin/index.js',
    format: 'commonjs',
    indent: false,
    name: 'Clean',
    sourcemap: false,
    banner: banner(
      name,
      description,
      repository,
      homepage,
      version,
      year$,
      license,
      author,
      true
    )
  },

  plugins: [
    json({
      preferConst: true,
      indent: ' ',
      compact: true
    }),
    typescript({
      useTsconfigDeclarationDir: true
    }),
    terser()
  ]
}
