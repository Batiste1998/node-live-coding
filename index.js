const express = require('express')
const mongoose = require('mongoose')
const WilderModel = require('./models/Wilder')

const app = express()

mongoose
  .connect('mongodb://127.0.0.1:27017/wilder')
  .then(function () {
    console.log('Connected to MongoDB')
  })
  .catch(function (error) {
    console.log(`Error during connection ${error}`)
  })

app.get('/', function (req, res) {
  const newWilder = new WilderModel({
    name: 'Batistee Blactot',
    city: 'Vernon',
    skills: [
      {
        title: 'HTML',
        votes: 8,
      },
      {
        title: 'JS',
        votes: 10,
      },
    ],
  })
  newWilder
    .save()
    .then(function (result) {
      console.log(`Wilder's save ${result}`)
    })
    .catch(function (error) {
      console.log(error)
    })
})

app.listen(5000, function () {
  console.log('Server starting')
})
