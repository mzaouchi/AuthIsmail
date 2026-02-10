const express = require('express')
const { SignUp, SignIn } = require('../Controllers/User')
const { validSignUp, Validation, validSignIn } = require('../Middlewares/Validator')
const { isAuth } = require('../Middlewares/isAuth')

const userRouter = express.Router()


userRouter.post('/SignUp', validSignUp, Validation,SignUp)


userRouter.post('/SignIn', validSignIn, Validation, SignIn)


userRouter.get('/CurrentUser', isAuth, (req, res)=> res.send(req.user))

module.exports = userRouter
