const express = require('express');
const { createNote, getAllNotes, deleteNote } = require('../controllers/NotesController');
const router = express.Router();
//api/note/
router.get('/show',getAllNotes)
router.post('/create', createNote)
router.delete('/delete', deleteNote)

module.exports = router;