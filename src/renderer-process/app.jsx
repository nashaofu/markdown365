import 'normalize.css'
import './stylus/markdown365.styl'
import './stylus/markdown365-icons.styl'

if (process.env.NODE_ENV === 'development') {
  module.exports = require('./app.dev')
} else {
  module.exports = require('./app.prod')
}
