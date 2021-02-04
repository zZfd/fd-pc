const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootPath = path.resolve(__dirname, '..')

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    mainFields: ['main', 'module', 'browser'],
    alias:{
      '@':path.resolve(rootPath,'src')
    }
  },
  entry: path.resolve(rootPath, 'src', 'App.tsx'),
  target: 'electron-renderer',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: path.resolve(rootPath,'node_modules'),
        use: {
          loader: 'babel-loader'
        }
      },
       {
        // CSS全局处理
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: path.resolve(rootPath,'node_modules'),
      },

      {
        // less模块化处理
        test: /\.less$/,
        exclude: path.resolve(rootPath,'node_modules'),
        use: [
          'style-loader',
          {loader:'css-loader',options:{modules:{localIdentName:'[local]-[hash:5]'}}},
          'less-loader'
        ]
      }

    ]
  },
  devServer: {
    contentBase: path.join(rootPath, 'dist/renderer'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    host: '0.0.0.0',
    port: 4000,
    publicPath: '/'
  },
  output: {
    path: path.resolve(rootPath, 'dist/renderer'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
