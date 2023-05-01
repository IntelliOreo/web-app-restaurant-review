const { Schema, model } = require('mongoose');
const noteSchema = new Schema({
    title:{
      type: String,
      require: true,
    },
    body:{
        type: String,
        required: true,
    },
    date:{
    type: Date,
    required:true,
    }
},
  { timestamps:true }
)

const Note = model('Note', noteSchema)

module.exports = Note