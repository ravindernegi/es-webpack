var path = require('path');
module.exports = {
	entry : ['./src/app.js'],
	output: {
		path: path.resolve(__dirname, "build"), 
		filename : 'app.bundle.js'
	},
	module : {
		 rules: [{
	        test: /\.js?$/,
	        include: [
	          path.resolve(__dirname, "src")
	        ],
	        exclude: /node_modules/,
	        loader: 'babel-loader',
	        query: {
	           presets: []
	        }
	    }]
	},
  	watch:true
}