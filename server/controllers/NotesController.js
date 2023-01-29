const NotesController = {};

NotesController.addNote = async (req, res, next) => {
    console.log("req.body", req.body);
    const body = req.body;
    const text = `INSERT INTO note(id, title, body, date) VALUES ('${body.id}', '${body.title}', ${body.body}, '${body.date}');`;
  
    console.log(text);
  
    await db
      .query(text)
      .then(() => {
        return next();
      })
      .catch((err) => {
        return next(err);
      });
  };
  
  NotesController.deleteNote = async (req, res, next) => {
    const body = req.body;
    const text = `DELETE FROM bill WHERE note.id = ${body.id};`;
  
    await db
      .query(text)
      .then(() => {
        return next();
      })
      .catch((err) => {
        return next(err);
      });
  };
