import Note from '../models/NoteModel.js'

export const createNote = async (req, res) => {
  const { title, body, date } = req.body

   if ( !title ||!body || !date ){
     return res.status(400).json({
      message: "Missing required fields"
     })
   }

   try {
 // create a note
 const newNote = await Note.create({title,body,date})
//return create note
return res.status(200).json ({
  note: newNote
})  
} catch (error) {
    console.log(error)
    return res.status(500).json({
      message:"Server error at NotesControllers/createNote",
      error
    })
   }
}

export const getAllNotes = async(req,res) => {
  try {
    const notes = await Note.find().lean()
  return res.status(200).json({
    notes
  })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message:"Server error at NotesControllers/getAllNotes",
      error
    })
   }
}


export const deleteNote = async(req,res) => {
  try {
    Note.findByIdAndRemove(req.body.id)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message:"Server error at /NotesControllers/deleteNote",
      error
    })
   }
}
  
