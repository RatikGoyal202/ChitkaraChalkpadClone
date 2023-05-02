const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {type: Number,  required:true},
  password:  {type: String,  required:true},
  dept:  {type: String,  required:true}
});

module.exports = mongoose.model('UserData',userSchema)