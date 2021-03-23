const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',//开发模式
  entry: path.resolve(__dirname, './src/main.js'), // 入口文件
  output: {
    filename: '[name].[hash:8].js',      // 打包后的文件名称
    path: path.resolve(__dirname, '../dist')  // 打包后的目录
  },
  //webpack-dev-server
  devServer: {   //dev-server的配置对象
    open: true,  //是否直接打开项目
    contentBase: 'src',  //托管目录
    port: 3000,  //端口
    hot: true  //是否热更新
  },
  plugins: [
    //html-webpack-plugin
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html')// index.html的路径
    })
  ],
  module: {
    rules: [
      // style-loader css-loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // less-loader
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', "less-loader"]
      },
      // sass-loader
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', "sass-loader"]
      },
      // url-loader file-loader
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2997,
              name: '[hash:8][name].[ext]',
            },
          },
        ]
      }
    ],
  },
}
