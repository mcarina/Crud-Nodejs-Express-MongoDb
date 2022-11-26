const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  Month: {
    type: String,
    require: true
  },
  fname: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true,
    minleght: 7
  }
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel
