import './ShowNotes.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NotesList from './NotesList'
import { toast } from 'react-toastify'

const baseUrl = `http://localhost:8050/api/db`

function ShowNotes() {
  const [notes, setNotes] = useState([])

  // Load notes on mount

  useEffect(() => {
    axios
      .get(`${baseUrl}`)
      .then((res) => {
        console.log(Array.isArray(res.data))
        setNotes(res.data)
        console.log('notes ' + notes)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // Client updates
  /**
   * @param e -> Event
   * @param noteId
   */
  const deleteNote = async (e, noteId) => {
    e.preventDefault()
    try {
      const res = await axios.delete(`${baseUrl}/${noteId}`)
      console.log(res)

      if (res.status === 200) {
        const filterNotes = notes.filter((item) => item.id !== noteId)
        const deletedNote = notes.find(
          (deletedNote) => deletedNote.id === noteId
        )
        setNotes(filterNotes)
        toast.success('Note deleted succesfully')
      } else {
        console.log('Note deleted on db')
        toast.error('Unable to delete note on client')
      }
    } catch (e) {
      console.error(e)
      toast.error('Unable to delete note. Contact Administrator')
      return
    }
  }

  return (
    <div className='background-notes'>
      {notes.map((note) => {
        return (
          <div key={note.id} className='body-note'>
            <NotesList note={note} deleteNote={deleteNote} />
          </div>
        )
      })}
    </div>
  )
}

export default ShowNotes
