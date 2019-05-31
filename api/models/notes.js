const mongoose = require('mongoose')
const moment = require('moment')

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title cannot be blank"
  },
  preview: {
    type: String
  },
  body: {
    type: String,
    required: "Note cannot be blank"
  },
  tags: {
    type: String
  },
  created: {
    type: Number,
    default: moment().valueOf()
  },
  updated: {
    type: Number,
    default: moment().valueOf()
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    username: String
  }
})

module.exports = mongoose.model('Note', NoteSchema);
