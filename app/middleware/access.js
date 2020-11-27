const {User}=require('../models/User')
const adminAccess = function(req, res, next) { 
   
    if(req.user.role =="admin" || req.user.role =="agent"){
        next()
    }else{
        res.status("403").send({error: "You are unauthorised to view" })
    }
}

const formAdmin = function(req, res, next) {    
    console.log(req.user)
    if(req.user.role=="agent"){
        next()
    }else{
        res.status("403").send({error: "You are unauthorised to view " })
    }
}

module.exports = {
    adminAccess,
    formAdmin
}