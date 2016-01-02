var path = require('path')
var webpack = require('webpack')
var node_module_dir = path.resolve(__dirname, 'node_modules')

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'app/main.js'),
		mobile: path.resolve(__dirname, 'app/mobile.js'),
		vendors:['react', 'redux', 'jquery', 'react-router']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	module: {
		loaders: [
			{test: /\.jsx?$/, loaders: ['react-hot','babel'], exclude: [node_module_dir]},
			{test: /\.css$/, loader: 'stype!css'},
			{test: /\.less$/, loader: 'style!css!less'},
			{test: /\.(png|jpg|jpeg)$/, loader:'url?limit=25600'}
		],
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
	]
}
