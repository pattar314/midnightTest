const { mongoose } = require("mongoose");


const logModel = new mongoose.schema({
  log: {
    type: {String},
    required: true
  }
})

module.exports = mongoose.model('Log', logModel)