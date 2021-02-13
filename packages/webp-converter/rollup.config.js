import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'
import lerna from '../../lerna.json'

const start = 2021
const year = lerna.year > start ? `${start}-${lerna.year}` : start

export default {
  input: 'lib/index.ts',

  output: {
    file: 'index.js',
    format: 'umd',
    indent: false,
    name: 'WebpConverter',
    sourcemap: false,
    banner: `/*!
Webp Converter
${pkg.description}

Version: ${lerna.version}
License: ${pkg.license}
Repository: ${lerna.repository}
Documents: ${pkg.homepage}

Copyright (c) ${year} ${pkg.author}
*/`
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
