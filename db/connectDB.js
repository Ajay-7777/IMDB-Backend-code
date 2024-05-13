const mongoose = require('mongoose')
let url=`mongodb+srv://akkirahi810:abcd1234@cluster0.tkbwrnl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const connectDB = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDB
