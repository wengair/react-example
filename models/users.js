// data schema of users table
const mongoose = require('mongoose')
const {Schema} = mongoose
const uniqueValidator = require('mongoose-unique-validator')

const users = new Schema({
  email: {
    type: String,
    validate:{
      // format should be xxx@xxx.xxx
      validator: value => /^\S+@\S+[.]\S+$/.test(value),
      message: 'Invalid email format',
    },
    required: 'Email is required',
    unique: 'This email has been used, please use another one.',
  },
  password: {
    type: String,
    validate:{
      validator: value => /^\S+$/.test(value),
      message: 'Password can not conatin space',
    },
    validate:{
      validator: value => /^\S\S\S+$/.test(value),
      message: 'Password should contains at least 3 characters',
    },
    // min: [3, 'Password should contains at least 3 characters'],
    required: 'Password is required',
  },
  first_name: String,
  last_name: String,
  Created: Date,
  Modified: Date,
})

// apply the plugin to users table to get a beautiful mongooseDB error message
users.plugin(uniqueValidator)

mongoose.model('users', users)
