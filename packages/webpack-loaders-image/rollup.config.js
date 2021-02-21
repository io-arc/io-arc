import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import { name, description, homepage, author, license } from './package.json'
import { year, repository, version } from '../../lerna.json'
import json from '@rollup/plugin-json'
import { banner } from '../../utils/banner'

const start = 2020
const year$ = year > start ? `${start}-${year}` : start

export default {
  input: 'lib/index.ts',

  output: {
    file: 'index.js',
    format: 'umd',
    indent: false,
    name: 'ImageLoader',
    sourcemap: false,
    globals: {
      '@io-arc/env': 'env',
      '@io-arc/output-dir-diff': 'OutputDiff'
    },
    banner: banner(
      name,
      description,
      repository,
      homepage,
      version,
      year$,
      license,
      author,
      false
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
    terser({
      sourcemap: false
    })
  ],
  external: ['@io-arc/env', '@io-arc/output-dir-diff']
}
