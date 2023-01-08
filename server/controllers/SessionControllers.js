import Session from '../models/sessionModel.js'

export const start = async (req, res) => {
  return res.json(res.locals.curSession)
}

export const update = async (req, res) => {
  return res.json(res.locals.updateSession)
}

export const clearUp = async (req, res) => {
  return res.sendStatus(200)
}
