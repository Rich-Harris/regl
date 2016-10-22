var config = require('./config.js')
var removeCheck = require('./plugins/remove-check.js')

config.targets = [
  { dest: 'dist/regl.unchecked.js', format: 'umd' },
  { dest: 'dist/regl.unchecked.es.js', format: 'es' }
];

config.plugins.push(removeCheck())
config.sourceMap = false

export default config
