const Session = require('../models/sessionModel.js');


const sessionController = {}

sessionController.startSession = async (req, res, next) => {
  return next()
}

sessionController.updateSession = async (req, res, next) => {
  return next()
}

sessionController.clearupSession = async (req, res, next) => {
  return next(err)
}

module.exports = sessionController
