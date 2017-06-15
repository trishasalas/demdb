module.exports = {
  parser: require('postcss-scss'),
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'autoprefixer': {},
    'cssnano': {},
    'precss': {},
    'postcss-color-function': {},
    'postcss-utilities': {
      'ie8': true,
      'centerMethod': 'flexbox',
    }
  }
}
