const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
}

module.exports = {
	entry: PATHS.app,
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: './app/index.html'
		}),
		new CleanWebpackPlugin(['build'], {
			"verbose": true
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				include: PATHS.app
			},
			{
				test: /\.less$/,
				loaders: ['style', 'css', 'less']
			},
			{
				test: /\.jsx?$/,
				include: PATHS.app,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};
