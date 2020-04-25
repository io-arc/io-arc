import { RuleSetRule } from 'webpack'

const linterDefault = {
  validateIndentation: 2,
  requireClassLiteralsBeforeAttributes: true,
  requireIdLiteralsBeforeAttributes: true,
  requireLowerCaseAttributes: true,
  requireLowerCaseTags: true,
  requireSpaceAfterCodeOperator: true,
  requireSpecificAttributes: [{ img: ['alt'] }],
  requireStrictEqualityOperators: true
}

/**
 * Pug linter loader
 * `linter` parameter reference to {@link https://github.com/pugjs/pug-lint pug-lint}
 *
 * @param regex - target regular expression
 * @param loader - loader name
 * @param linter - linter object
 * @constructor
 */
export const PugLintLoader = (
  regex: RegExp,
  loader: string,
  linter?: object
): RuleSetRule => {
  const lint = linter || linterDefault

  return {
    test: regex,
    exclude: /node_modules/,
    loader,
    options: { emitError: true, ...lint },
    enforce: 'pre'
  }
}
