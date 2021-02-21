import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import { name, description, homepage, author, license } from './package.json'
import { year, repository, version } from '../../lerna.json'
import { banner } from '../../utils/banner'

const start = 2020
const year$ = year > start ? `${start}-${year}` : start

export default {
  input: 'lib/index.ts',

  output: {
    file: 'index.js',
    format: 'umd',
    indent: false,
    name: 'Logger',
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
      false
    )
  },

  plugins: [
    typescript({
      useTsconfigDeclarationDir: true
    }),
    terser({
      sourcemap: false
    })
  ]
}
