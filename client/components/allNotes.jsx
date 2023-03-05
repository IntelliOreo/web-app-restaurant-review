import './ShowNotes.css'
import React from 'react'

function NotesList({ note }) {
  return (
    <div className='dates-style'>
      <h6>id #: {note.id}</h6>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <h6 className='text-style'>{note.date}</h6>
    </div>
  )
}


export default NotesList