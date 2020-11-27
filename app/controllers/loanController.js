const express=require('express')
const router=express.Router()
const {User} =require('../models/User')
const {LoanForm}=require('../models/LoanForm')
const {formAdmin}=require('../middleware/access')
const { authenticateUser}=require('../middleware/authenticate') 

router.post('/create',authenticateUser,  formAdmin,async(req,res)=>{
    const body=req.body
    const loanform=new LoanForm(body)
    loanform.save()
    .then(form=>res.send(form))
    .catch(err=>res.send(err))


}) 

module.exports={
    loanRouter:router
}