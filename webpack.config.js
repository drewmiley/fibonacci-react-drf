const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	cache: true,
	context: __dirname,
	debug: true,
	devtool: 'source-map',
	entry: {
		// React
		app: './static/react/index'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015']
			}
		}, {
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: { presets: ['es2015', 'react'] }
		}]
	},
	output: {
		path: path.resolve('./assets/webpack_bundles/'),
		filename: '[name]-[hash].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new BundleTracker({ filename: './webpack-stats.json' }),
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery',
			'window.jQuery': 'jquery'
		}),
		new CleanWebpackPlugin(['./static/bundles'], {
			root: __dirname,
			verbose: true,
			dry: false
		})
	]
};
