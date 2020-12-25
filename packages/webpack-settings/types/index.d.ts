import webpack from 'webpack';
import Optimization = webpack.Options.Optimization;
/**
 * webpack config stats
 * @param stats
 */
export declare const stats: (stats?: boolean | "normal" | "none" | "verbose" | "errors-only" | "errors-warnings" | "minimal" | webpack.Stats.ToStringOptionsObject | undefined) => boolean | "normal" | "none" | "verbose" | "errors-only" | "errors-warnings" | "minimal" | webpack.Stats.ToStringOptionsObject | undefined;
/**
 * webpack config performance
 * @param performance
 */
export declare const performance: (performance?: false | webpack.Options.Performance | undefined) => false | webpack.Options.Performance | undefined;
/**
 * webpack progressbar plugin config
 * @param task
 */
export declare const progressBar: (task: string) => {
    format: string;
    clear: boolean;
};
/**
 * Webpack optimization
 */
export declare const jsOptimization: Optimization;
/**
 * Global constant for webpack
 */
export declare const webpackDefine: {
    IS_PRODUCTION: string;
    SITE_TITLE: string;
    SITE_URL: string;
    SITE_AUTHOR: string;
    SITE_ROOT: string;
};
