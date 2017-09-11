if (process.env.NODE_ENV === 'development') {
  require('./app.dev')
} else {
  require('./app.prod')
}
