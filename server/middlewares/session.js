import Session from '../models/sessionModel.js'

const sessionController = {}

sessionController.startSession = async (req, res, next) => {
  return next()
}

sessionController.updateSession = (req, res, next) => {
  return next()
}

sessionController.clearupSession = async (req, res, next) => {
  return next(err)
}

export default sessionController
