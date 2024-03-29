import webpack, { RuleSetRule, DefinePlugin } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCSSLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: path.resolve(__dirname, '..', '..', 'public', 'locales'),
        buildLocales: path.resolve(__dirname, '..', '..', 'public', 'locales'),
    };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');
    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': paths.src,
    };

    const rules = config.module!.rules as RuleSetRule[];
    config!.module!.rules = rules.map((rule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config!.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config!.module!.rules.push(buildCssLoader(true));

    config!.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify('https://testapi.com'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    config!.resolve!.alias = {
        '@': path.resolve(__dirname, '..', '..', 'src'),
    };

    return config;
};
