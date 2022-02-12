const path = require('path');

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
     
    ],

    // TODO: Add the correct modules
    module: {

    }
  };
};
