import '../ShowNotes/ShowNotes.css'
import React, { useEffect, useState } from 'react'
import CreateNew from '../CreateNew/CreateNew'
import axios from 'axios'
import NotesList from './myNotes'
import { toast } from 'react-toastify'

const userId = localStorage.getItem('userId')

function ShowMyNotes() {
  const [notes, setNotes] = useState([])

  // Load notes on mount

  const url = 'http://localhost:8080/api/note/show'
  useEffect(() => {
    axios
      .get(`${url}`)
      .then((res) => {
        const filterNotes = res.data.notes.filter((item) => item.userId == userId)
        setNotes(filterNotes)
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
      const res = await axios.delete(`${url}/${noteId}`)
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
      <CreateNew/>

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

export default ShowMyNotes