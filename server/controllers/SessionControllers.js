const Session = require('../models/sessionModel');
const User = require('../models/UserModel');


const start = async (req, res) => {
  return res.json(res.locals.curSession)
}

const update = async (req, res) => {
  return res.json(res.locals.updateSession)
}

const clearUp = async (req, res) => {
  return res.sendStatus(200)
}

// app.use(Session(User.token));
module.exports = {
  clearUp,
  update,
  start
};