const mongoose = require('mongoose')
const { Schema } = mongoose

console.log('Initializing User schema')

const userSchema = new Schema({
    googleId: String
})

mongoose.model('users', userSchema)