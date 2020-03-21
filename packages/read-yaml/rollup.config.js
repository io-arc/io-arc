import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'
import lerna from '../../lerna.json'

export default {
  input: 'src/index.ts',

  output: {
    file: 'index.js',
    format: 'umd',
    indent: false,
    name: 'ReadYaml',
    sourcemap: false,
    banner: `/*!
Read YAML
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
