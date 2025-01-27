const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WilderSchema = new Schema({
  name: String,
  city: String,
  skills: [
    {
      title: String,
      votes: Number,
    },
  ],
})

module.exports = mongoose.model('wilder', WilderSchema)