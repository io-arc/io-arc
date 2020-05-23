import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'
import lerna from '../../lerna.json'

const start = 2020
const year = lerna.year > start ? `${start}-${lerna.year}` : start

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
    banner: `/*!
Image Loader
${pkg.description}

${pkg.homepage}
Version: ${lerna.version}
License: ${pkg.license}
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
  ],
  external: ['@io-arc/env', '@io-arc/output-dir-diff']
}
