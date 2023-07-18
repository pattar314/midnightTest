const { mongoose } = require("mongoose");


const contactModel = mongoose.Schema({
  to: {
    type: String,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  message:  {
    type: String,
    required: true
  },
  response:  {
    type: String
  },
  seen: {
    type: Boolean,
    default: false,
    required: true
  },
  id: ObjectID
})

module.exports = mongoose.model('Contact', contactModel)