import  mongoose  from 'mongoose'


const contactSchema = new mongoose.Schema({
    to: String,
    from: String,
    message: String,
    history: [String],
    seen: Boolean
})

export default mongoose.model('Contact', contactSchema)