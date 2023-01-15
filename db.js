const mongoose = require('mongoose')
const db = process.env.MY_MONGO_URI;
function connectDB() {
  mongoose.connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log('MongoDB Connection Succeeded.')
      } else {
        console.log('Error in DB connection: ' + err)
      }
    }
  )
  const connection = mongoose.connection
  connection.on('connected', () => {
    console.log('Mongo DB connection Successfull!!')
  })
  connection.on('error', () => {
    console.log('Connection Failed')
  })
}
// Earlier we used to write mongoose connection code directly here we have written everything in connectDB function and below we called that function
connectDB()
module.exports = mongoose
