const { mongoose } = require("mongoose");


const contactModel = mongoose.Schema({
  from: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String
  },
  message:  {
    type: String,
    required: true
  },
  history:  {
    type: [String]
  },
  seen: {
    type: Boolean,
    default: false,
    required: true
  }
})

module.exports = mongoose.model('Contact', contactModel)