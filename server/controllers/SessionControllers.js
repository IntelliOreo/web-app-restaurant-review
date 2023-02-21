import Session from '../models/sessionModel.js'
import User from '../models/UserModel.js'


export const start = async (req, res) => {
  return res.json(res.locals.curSession)
}

export const update = async (req, res) => {
  return res.json(res.locals.updateSession)
}

export const clearUp = async (req, res) => {
  return res.sendStatus(200)
}

// app.use(Session(User.token));