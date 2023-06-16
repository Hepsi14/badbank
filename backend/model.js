import mongoose from "mongoose";
import Joi from "joi";

const BankSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
      //  unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    deposite:{
        type:Number,
        default:0
    },
    withdraw:{
        type:Number,
        default:0
    },
    balance:{
        type:Number,
        default:0
    },
    isCustomer:{
        type:Boolean,
        default:true
    }

})

const Bank=mongoose.model('Bank',BankSchema);

// const validateStudent= (value) => {
//     const schema = Joi.object({
//       name: Joi.string().min(3),
//       emailId: Joi.string().email().required(),
//       password: Joi.string().required().min(4),
//       phoneNo:Joi.number().required(),
//       deposite:Joi.number(),
//       withdraw:Joi.number()


//     });
//     const result = schema.validate(value)
  
//     return result  
//   };


//get all student data


export default Bank;