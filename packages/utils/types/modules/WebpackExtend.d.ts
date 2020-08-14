import { ExternalsElement, RuleSetRule, Plugin } from 'webpack';
interface IfWebpackExtend {
    externals?: ExternalsElement | ExternalsElement[];
    loaders?: RuleSetRule[];
    plugins?: Plugin[];
    [key: string]: any;
}
export declare class WebpackExtend {
    #private;
    constructor(target: string);
    /**
     * Extend Data
     */
    data(): IfWebpackExtend | null;
    /**
     * Get a externals define
     */
    externals(): IfWebpackExtend['externals'] | undefined;
    /**
     * Get a module rule option
     */
    loaders(): IfWebpackExtend['loaders'] | undefined;
    plugins(): IfWebpackExtend['plugins'] | undefined;
}
export {};
