const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
      cards: './src/js/cards.js'
    },

    // TODO: Add the correct output
    output: {
      // [name] will inject main, install and cards '.bundle.js' and create 3 separate bundled files for each of our entry points along with any dependencies, packages or files that those entry points need
      filename: '[name].bundle.js',
      // this tells webpack to output it at the root of the 'dist' folder
      path: path.resolve(__dirname, 'dist'),
    },

    // TODO: Add the correct plugins
    plugins: [
      // generates html file in dist folder, looks at the index.html in client folder & passes in the title 'Contact Cards
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Contact Cards'
      }),
      // We already have a service worker file, so we will use inject manifest rather than manifest. The source is the sw file already in the client folder and the new file name is 'src-sw.js', where the file will be outputted
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      })
     
    ],

    // TODO: Add the correct modules
    module: {

    }
  };
};
