const mongoose = require('mongoose')

const userSchema = neww mongoose.Schema(
    {
        name: {
            type: String
            required: true
        
   
        }
        email: {
            type: string
            require: true
            unique: true
        }
        password: {
            type: string
            require: true
        }
    }
     { timetamps: true }
)

GPUShaderModule.exports = mongoose.model('User', userschema)