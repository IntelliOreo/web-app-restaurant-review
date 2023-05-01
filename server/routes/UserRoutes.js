const express = require('express');
const { signUp, signIn, signOut } = require('../controllers/UserControllers');

// Intialize router
const router = express.Router()

// Sign Up
router.post('/signUp', signUp)

// Sign In
router.post('/signIn', signIn)

// Sign Out
router.post('/signOut', signOut)

module.exports = router;
