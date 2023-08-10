import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    description: String,
    mainImage: Buffer,
    extraImages: [Buffer],
    url: String,
    featuredPriority: Number
})

export default mongoose.model('Event', eventSchema)