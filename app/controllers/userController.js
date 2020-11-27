const express=require('express')
const router=express.Router()
const { User} =require('../models/User')

const { authenticateUser}=require('../middleware/authenticate')
const {adminAccess}=require('../middleware/access')

router.post('/register',(req,res)=>{
    const body=req.body
    const user =new User(body)
    user.save()
    .then(user=>res.send(user))
    .catch(err=>res.send(err))
})

router.post('/login',(req,res)=>{
    const body=req.body
    User.findByCredentials(body.email,body.password)
    .then((user)=>{
        return user.generateToken()
    })
    .then((token)=>{
        res.send({token})
    })
    .catch((err)=>{
        res.send(err)
    })    
})
router.delete('/logout', authenticateUser,function(req,res){
    const {user,token}=req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
    .then(function(user){
        res.send({notice:'successfully logout...'})
    })
    .catch(function(err){
        res.send(err)
    })
})
router.get('/allUsers',authenticateUser,adminAccess,async function(req,res){
    try{
        let users =await User.find()
        return res.send(users)
    }catch(e){
        return res.send(e)
    }

})

router.get('/view/:id',authenticateUser,adminAccess,async(req,res)=>{
    const id=req.params.id
    const user=req.user
    User.findById(id)
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.send(err)
    })

})
router.put('/edituser/:id',authenticateUser,adminAccess,async(req,res)=>{
    const id=req.params.id
    const body=req.body
  User.findByIdAndUpdate({_id:id},body,{new:true,runValidators:true})
  .then(form=>{
      res.send(form)
  })
  .catch(err=>{
      res.send(err)
  })

})
module.exports={
    usersRouter:router
}