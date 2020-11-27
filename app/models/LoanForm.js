const mongoose=require('mongoose')
const Schema=mongoose.Schema
const {User} =require('../models/User')

const formSchema=new Schema({
    name:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    email:{
        type:Schema.Types.ObjectId,
        ref:"User"
        
    },
    
   
    amount:{
        type:Number,
        required:true
    },
    emi:{
        type:Number,
        required:true
    },
    rate:{
        type:Number,
        required:true
    },
   
    status:{
        type:String,
        default:'pending'
    }

})

const LoanForm=mongoose.model('LoanForm',formSchema);
module.exports={
    LoanForm
}