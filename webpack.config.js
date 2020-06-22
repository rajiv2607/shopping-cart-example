module.exports = {

  entry: './src/index.js',
  mode: 'development',

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.min.js'
  },
  
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
            options: {
                presets:['es2015','react'],
                plugins: ['transform-decorators-legacy','transform-object-rest-spread']
            }
        }],
    },
    {
      test: /\.s[ac]ss$/i,
      use: ['style-loader','css-loader','sass-loader'],
    }]
  },
  devServer: {
    contentBase: './dist'
},
resolve: {
  extensions: ['.jsx', '.js','scss'],
  }
    
};