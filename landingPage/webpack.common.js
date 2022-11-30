const path = require('path');

const config = {
  entry: {
    app: './client/index.js'
  },

  output: {
    filename: 'landing.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  }
};

module.exports = config;
