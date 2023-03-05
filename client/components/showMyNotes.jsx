import CreateNew from "./CreateNew";
import NotesList from './myNotes'
import './ShowNotes.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'



function ShowMyNotes() {

  const [notes, setNotes] = useState([])

  // Load notes on mount

  const baseUrl = 'http://localhost:8080/api/note/show'

  useEffect(() => {
    axios
      .get(`${baseUrl}`)
      .then((res) => {
        console.log(Array.isArray(res.data))
        setNotes(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

    return(
      <div > 
      {/* <CreateNew/> */}
      {notes.map((note) => {
        return (
          <div key={note.id} className='body-note'>
            <NotesList note={note} />
          </div>
        )
      })}
      </div>
    );
}

export default ShowMyNotes;