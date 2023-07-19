const jwt = require('jsonwebtoken')

const authCheck = (req, res, next) => {
  const auth = req.get('Authorization')
  if(auth && auth.startsWith('Bearer ')){
    if(jwt.verify(auth.substring(7), process.env.JWT_SECRET)){
      console.log(`user authorized`)
      next()
    }
  } else {
    console.log('not authorized')
    res.status(401).send({error: 'not authorized'}).redirect('/login')
  }

}

module.exports = { authCheck }

