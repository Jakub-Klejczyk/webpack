// First of, we have to take care of path proper loading. We're gonna be using resolve method from npde's path module
const { resolve } = require('path')

// Next, we need to export module
// @see https://webpack.js.org/concepts/

module.exports = {
  // relative path same as above
  entry: './src/js/scripts.js',
  output: {
    path: resolve(__dirname, 'dist/js'), // Where webpack should place bundled file,
    filename: 'bundle.js'
  },
  // Here comes the big one. Here, we have to decide, for which target modules should built upon
  target: 'web', // web / node
}