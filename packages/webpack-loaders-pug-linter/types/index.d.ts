import { RuleSetRule } from 'webpack';
/**
 * Pug linter loader
 * `linter` parameter reference to {@link https://github.com/pugjs/pug-lint pug-lint}
 *
 * @param regex - target regular expression
 * @param loader - loader name
 * @param linter - linter object
 * @constructor
 */
export declare const PugLintLoader: (regex: RegExp, loader: string, linter?: object | undefined) => RuleSetRule;
