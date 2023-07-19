const User = require('./../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const login = async ({username, password}) => {
  try {
    const foundUserRequest = await User.find({username})
    const foundUser = foundUserRequest[0]
    console.log('found user in auth resolvers login: ', foundUser)
    if(bcrypt.compare(password, foundUser.password)){
      const signedUser = jwt.sign({...foundUser, password: null}, process.env.JWT_SECRET)
      console.log('signed user in authResolvers: ', signedUser)
      return signedUser
    }
  } catch(error) {
    console.log('there was an error in login in auth resolvers: ', error)
  }

}


const createUser = async ({username, password}) => {
  const hashedPass = await bcrypt.hash(password, 7)
  const newUser = new User({password: hashedPass, username})
  console.log('new user in auth resolvers: ', newUser)
  try {
    const savedNewUser = await newUser.save()
    console.log('saved new user: ', savedNewUser)
    return savedNewUser
  } catch(error) {
    if(error.code === 11000){
      console.log('error: Username taken')
      return {error: 'Username taken'}
    }
    console.error('there was an error with creating new user: ', error)
    return {error}
  }
}

const clearUsers = async () => {
  await User.deleteMany({})
  await createUser({username: 'test', password: 'test'})
  console.log('users cleared')
}

const checkLogs = () => {

}

module.exports = {login, createUser, checkLogs, clearUsers}