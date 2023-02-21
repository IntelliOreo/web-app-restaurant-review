import './ShowNotes.css'
import React from 'react'

function NotesList({ note, deleteNote }) {
  return (
    <div className='dates-style'>
      <h6>id #: {note.id}</h6>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <h6 className='text-style'>{note.date}</h6>
      <button className='bttn' onClick={(e) => deleteNote(e, note.id)}>
        Delete
      </button>
    </div>
  )
}

export default NotesList
