import express from 'express'
import { start, update, clearUp } from '../controllers/SessionControllers.js'
import session from '../middlewares/session.js'
import cookie from '../middlewares/cookie.js'

// Initialize router
const router = express.Router()

router.get('/', cookie.setCookie, session.startSession, start)

router.post('/update', session.updateSession, update)

router.delete('/clearUp', session.clearupSession, clearUp)



export default router
