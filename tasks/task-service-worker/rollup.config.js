import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'
import lerna from '../../lerna.json'
import json from '@rollup/plugin-json'

const start = 2020
const year = lerna.year > start ? `${start}-${lerna.year}` : start

export default [
  {
    input: 'lib/index.ts',

    output: {
      file: 'bin/index.js',
      format: 'commonjs',
      indent: false,
      name: 'ServiceWorker',
      sourcemap: false,
      banner: `#!/usr/bin/env node
/*!
${pkg.description}

${pkg.homepage}
Version: ${lerna.version}
License: ${pkg.license}
Copyright (c) ${year} ${pkg.author}
*/`
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
    ]
  }
]
