
var webpack = require("webpack")

var htmlWebpackPlugin = require("html-webpack-plugin")

var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	//入口文件
	entry : './src/app.js',
	//输出位置
	output : {
		path : __dirname + '/build',
		filename : 'app.js'
	},
	devServer : { //配置热更新服务器
		proxy:{   //反向代理服务器请求数据
			'/api': {
				target: 'http://capi.douyucdn.cn',
				changeOrigin: true,
				secure:false
			}
		},
		contentBase : './build',
		host : 'localhost',
		port : 9000,
		historyApiFallback : false
	},
	plugins:[
		// new webpack.optimize.UglifyJsPlugin({ //压缩js
		// 	compress: {
	    //     	warnings: false
	    // 	}
	    // }),
	    new ExtractTextPlugin({  
			filename:'app.css',
			allChunks:true
		}),
		new htmlWebpackPlugin({ //将index输出
			template:'./src/index.html',
			filename:'index.html'
		})
	],
	module : {
		loaders:[
			{
				test:/\.css$/,
				loader:ExtractTextPlugin.extract({
					fallback:'style-loader',
					use:[
						{
							loader:'css-loader',
							options:{
								minimize:true //css压缩
							}
						}
					]
				})
			},
			{
				test:/\.scss$/,
				loader:ExtractTextPlugin.extract({
					fallback:"style-loader",
					use:"css-loader!sass-loader"
				})
			},
			{
				test:/\.js$/,
				loader:'babel-loader',
				query:{
					presets:['es2015','react']
				}
			}
		]
	}
}



