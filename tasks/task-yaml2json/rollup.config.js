import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'
import lerna from '../../lerna.json'

export default {
  input: 'lib/index.ts',

  output: {
    file: 'bin/index.js',
    format: 'commonjs',
    indent: false,
    name: 'Yaml2Json',
    sourcemap: false,
    banner: `#!/usr/bin/env node
/*!
Yaml2Json
${pkg.description}

${pkg.homepage}
Version: ${lerna.version}
License: ${pkg.license}
Copyright (c) ${lerna.year} ${pkg.author}
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