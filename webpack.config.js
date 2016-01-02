var path = require('path')

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname, 'app/main.js'),
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [{test: /\.jsx?$/, loaders: ['react-hot','babel']},
				  {test: /\.css$/, loader: 'stype!css'},
				  {test: /\.less$/, loader: 'style!css!less'},
				  {test: /\.(png|jpg|jpeg)$/, loader:'url?limit=25600'}
		]
	}
}
