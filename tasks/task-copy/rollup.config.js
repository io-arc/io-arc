import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'
import lerna from '../../lerna.json'
import json from '@rollup/plugin-json'

const banner = `/*!
File copy
${pkg.description}

${pkg.homepage}
Version: ${lerna.version}
License: ${pkg.license}
Copyright (c) ${lerna.year} ${pkg.author}
*/`

export default {
  input: 'lib/index.ts',

  output: [
    {
      file: 'bin/index.js',
      format: 'commonjs',
      indent: false,
      name: 'Copy',
      sourcemap: false,
      banner: `#!/usr/bin/env node
${banner}`
    },
    {
      file: 'index.js',
      format: 'umd',
      indent: false,
      name: 'Copy',
      sourcemap: false,
      banner
    }
  ],

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
  ]
}
