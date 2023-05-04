import CreateNew from "../CreateNew/CreateNew";
import NotesList from './allNotes'
import './ShowNotes.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'



function ShowNotes() {

    const [notes, setNotes] = useState([])
  
    // Load notes on mount
  
    const url = 'http://localhost:8080/api/note/show'
    useEffect(() => {
      axios
        .get(`${url}`)
        .then((res) => {
          setNotes(res.data.notes)
        })
        .catch((err) => {
          console.log(err)
        })
    }, [])
  
  
    return (
      <div className='background-notes'>
        <CreateNew/>
  
        {notes.map((note) => {
          return (
            <div key={note.id} className='body-note'>
              <NotesList note={note} />
            </div>
          )
        })}
      </div>
    )
  }


  export default ShowNotes
