import express from 'express'
import { signUp, signIn, signOut } from '../controllers/UserControllers.js'

// Intialize router
const router = express.Router()

// Sign Up
router.post('/signUp', signUp)

// Sign In
router.post('/signIn', signIn)

// Sign Out
router.post('/signOut', signOut)

export default router
