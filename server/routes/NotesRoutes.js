import express from 'express'
import { createNote, getAllNotes, deleteNote } from '../controllers/NotesController.js'
const router = express.Router();
//api/note/
router.get('/show',getAllNotes)
router.post('/create', createNote)
router.delete('/delete', deleteNote)

  export default router;