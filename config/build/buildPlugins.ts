import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import { BuildOptions } from './types/config'

const packageInstance = require('../../package.json')

export function buildPlugins({
	paths,
	isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
	const isProd = !isDev

	const plugins = [
		new HTMLWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__PACKAGE_NAME__: JSON.stringify(packageInstance.name),
			__PACKAGE_VER__: JSON.stringify(packageInstance.version),
		}),
		new CircularDependencyPlugin({
			exclude: /node_modules/,
			failOnError: true,
		}),
	].filter(Boolean)

	if (isDev) {
		plugins.push(new ReactRefreshPlugin())
		plugins.push(new webpack.HotModuleReplacementPlugin())
		plugins.push(
			new BundleAnalyzerPlugin({
				openAnalyzer: false,
				analyzerMode: 'static',
			}),
		)
	}

	if (isProd) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			}),
		)

		plugins.push(
			new CopyPlugin({
				patterns: [{ from: paths.locales, to: paths.buildLocales }],
			}),
		)
	}

	return plugins
}
