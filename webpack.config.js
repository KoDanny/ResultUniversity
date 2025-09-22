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
		historyApiFallback: true,
	},

	entry: getPath('src/index.tsx'),
	output: {
		filename: 'index.js',
		path: getPath('build'),
		clean: true,
		publicPath: '/',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: getPath('public/index.html'),
		}),
	],

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'@@data': path.resolve(__dirname, 'src/data'),
			'@@types': path.resolve(__dirname, 'src/types'),
			'@@components': path.resolve(__dirname, 'src/components'),
			'@@constants': path.resolve(__dirname, 'src/constants'),
			'@@hooks': path.resolve(__dirname, 'src/hooks'),
			'@@utils': path.resolve(__dirname, 'src/utils'),
			'@@pages': path.resolve(__dirname, 'src/pages'),
		},
	},

	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss?$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
};
