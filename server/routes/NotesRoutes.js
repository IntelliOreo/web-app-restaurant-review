const express = require("express");
const router = express.Router();

const NotesController = require("../controllers/NotesController");

router.get(
    "/",
    NotesController.getNotes,
    (req, res) => res.status(200).json(res.locals.AllNotes)
  );


router.post(
    "/notes",
    NotesController.getNotes,
    NotesController.addNote,
    (req, res) => res.sendStatus(200)
  );

router.post(
    "/Notes",
    NotesController.addNew,
    (req, res) => res.sendStatus(200)
  );

  module.exports = router;