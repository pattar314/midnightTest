const { mongoose } = require("mongoose");


const eventModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now(),
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
  featuredPriority: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('Event', eventModel)