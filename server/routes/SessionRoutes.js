const express = require('express');
const { start, update, clearUp } = require('../controllers/SessionControllers');
const session = require('../middlewares/session');
const cookie = require('../middlewares/cookie');

// Initialize router
const router = express.Router()

router.get('/', cookie.setCookie, session.startSession, start)

router.post('/update', session.updateSession, update)

router.delete('/clearUp', session.clearupSession, clearUp)



module.exports = router;
