const {Router} = require('express')
const { login, createUser, clearUsers } = require('../resolvers/authResolvers')
const { authCheck } = require('../middleware/authMiddleware')

const authRouter = Router()

authRouter.post('/login', async (req, res) => {
  console.log('login req in auth routes: ', req.body)
  const token = await login({...req.body})
  console.log( 'token in auth routes: ', token)
  res.status(200).send({token})
  return token
})

authRouter.post('/createUser', authCheck, async (req, res) => {
  console.log('create user body: ', req.body)
  const createdUser = await createUser({username: req.body.username, password: req.body.password})
  if(createdUser.error){
    res.status(400).send(createdUser)
  }
  res.send({message: `User ${createdUser.username} created`})
  return createdUser
})

authRouter.get('/clearUsers', (req, res) => {
  clearUsers()
  res.send({message: 'users cleared'})
})

module.exports = authRouter