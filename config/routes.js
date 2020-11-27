const express=require('express')
const router=express.Router()
const {usersRouter}=require('../app/controllers/userController')

const { loanRouter } = require('../app/controllers/loanController')


router.use('/users',usersRouter)

router.use('/loanform',loanRouter)

module.exports={
    routes:router
}