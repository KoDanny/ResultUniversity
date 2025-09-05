const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getPath(pathName) {
	return path.resolve(__dirname, pathName);
}

module.exports = {
	mode: 'development',
	context: getPath('src'),

	devServer: {
		port: 4000,
		hot: true,
		open: true,
	},

	entry: getPath('src/index.tsx'),
	output: {
		filename: 'index.js',
		path: getPath('build'),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: getPath('public/index.html'),
		}),
	],

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
};
