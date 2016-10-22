var json = require('rollup-plugin-json')

module.exports = {
  entry: 'regl.js',
  targets: [
    { dest: 'dist/regl.js', format: 'umd' },
    { dest: 'dist/regl.es.js', format: 'es' }
  ],
  moduleName: 'createREGL',
  plugins: [
    json()
  ],
  sourceMap: true
}
