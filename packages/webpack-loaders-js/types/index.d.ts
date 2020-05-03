import { RuleSetRule } from 'webpack';
/**
 * Read YAML file
 * Install 'yaml-loader'
 */
export declare const yamlLoader: RuleSetRule;
/**
 * Web Worker loader
 * Install 'worker-loader'
 */
export declare const workerLoader: RuleSetRule;
/**
 * Babel loader
 * Install 'babel-loader', '@babel/core' and '@babel/preset-env'
 */
export declare const babelLoader: RuleSetRule;
/**
 * TypeScript loader
 * Install 'ts-loader'
 *
 * @param vue - use Vue.js (optional)
 * @constructor
 */
export declare const TypescriptLoader: (vue?: boolean) => RuleSetRule;
/**
 * ESLint loader
 * Install 'eslint-loader'
 *
 * @param eslint - eslint file path (optional)
 * @constructor
 */
export declare const EslintLoader: (eslint?: string) => RuleSetRule;
