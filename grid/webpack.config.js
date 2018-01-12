var webpack = require('webpack');

var config = {
   entry:[
      'script-loader!jquery/dist/jquery.min.js',
      './src/main.js'
    ],
  externals: {
    jquery: 'jQuery'
  },

  plugins: [
   new webpack.ProvidePlugin({
     '$':'jquery',
    'jQuery':'jquery'
   })
  ],

   output: {
      path:'/',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 3000
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: ['style-loader', 'css-loader'],
         }
      ]
   }
}

module.exports = config;
