import type { StorybookConfig } from '@storybook/react-webpack5'
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack'
import path from 'path'

const packageInstance = require('../../package.json')

const config: StorybookConfig = {
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-webpack5-compiler-swc',
		'@storybook/addon-onboarding',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-webpack5-compiler-babel',
	],
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config: Configuration) => {
		const paths = {
			build: '',
			html: '',
			entry: '',
			src: path.resolve(__dirname, '..', '..', 'src'),
			locales: '',
			buildLocales: '',
		}
		config!.resolve!.modules!.push(paths.src)
		config!.resolve!.extensions!.push('.ts', '.tsx')
		config!.resolve!.alias = {
			...config!.resolve!.alias,
			'@': paths.src,
		}

		// @ts-ignore
		config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
			if (/svg/.test(rule.test as string)) {
				return { ...rule, exclude: /\.svg$/i }
			}
			return rule
		})

		config!.module!.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})

		config!.plugins!.push(
			new DefinePlugin({
				__IS_DEV__: JSON.stringify(true),
				__PACKAGE_NAME__: JSON.stringify(packageInstance.name),
				__PACKAGE_VER__: JSON.stringify(packageInstance.version),
			}),
		)
		// Return the altered config
		return config
	},
}
export default config
