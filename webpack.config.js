module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8090',
		'./app/app.js'
	],
	output: {
		path: './build',
		publicPath: 'http://localhost:8090/build/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.json$/, loader: 'jsx-loader?harmony' },
			{ test: /\.js$/, loader: 'jsx-loader?harmony' },
			{ test: /\.css$/, loader: 'style!css' },
		]
	},
	resolve: {
		extensions: ['', '.js', '.json']
	},
}
