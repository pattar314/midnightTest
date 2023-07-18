const { mongoose } = require("mongoose");


const eventModel = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  mainImage: {
    data: Buffer
  },
  extraImages: {
    data: [Buffer]
  },
  url: String,
  
})

module.exports = mongoose.model('Event', eventModel)