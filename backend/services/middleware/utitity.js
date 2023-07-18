
const loggerMiddleware = (req, res, next) => {
  console.log('method: ', req.method)
  console.log('body: ', req.body)
  console.log('target: ', req.url)
  next()
}

module.exports = {loggerMiddleware}