const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

/**
 * @description Sign Up user
 */
const signUp = async (req, res) => {
  const { username, email, userId, password } = req.body
 console.log(req.body + 'inside backend!')
  if (!username || !email || !password) {
    //if no username, no email, or no password
    return res.status(400).json({
      message: 'Missing 1 or more required fields.'
    })
  }
  try {
    //validate if email already exists, and user is signed up
    //check if email is already registered
    const isDuplicate = await User.findOne({ email }).exec()

    if (isDuplicate) {
      return res.status(409).json({
        message: 'Email is already registered'
      })
    }

    // Encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      username,
      email,
      userId,
      password: encryptedPassword
    })
    return res.status(200).json({
      message: 'User created successfully',
      newUser
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'sign up server error',
      error
    })
  }
}

/**
 * @description Sing In user
 */
const signIn = async (req, res) => {
  const { username, password } = req.body
  if (!username && password) {
    //if no email
    //display error message
    return res.status(400).json({
      message: 'Please enter your username address.'
    })
  } else if (username && !password) {
    //if no password
    //display error message
    return res.status(400).json({
      message: 'Please enter your password.'
    })
  } else if (!username && !password) {
    return res.status(400).json({
      message: 'Please enter the required fields.'
    })
  }
  // const existing user = email in body of request
  const existingUser = await User.findOne({ username: req.body.username })
  if (!existingUser) {
    return res.status(401).json({
      message: 'Invalid email address and/or password. Please try again.'
    })
  }

  const isValidPassword = await bcrypt.compare(password, existingUser.password)

  if (!isValidPassword) {
    return res.status(401).json({
      message: 'Invalid email address and/or password. Please try again.'
    })
  }

// Set HttpOnly cookie
const sessionId = uuidv4();
res.cookie('session_id', sessionId, {
  httpOnly: true,
  secure: process.env.NODE_ENV !== 'development',  // Only send the cookie over HTTPS in production
  maxAge: 7 * 24 * 60 * 60 * 1000 // 1-week expiration
  // sameSite: 'strict' // Consider setting this for CSRF protection
});

  req.session.regenerate(function (err) {
    if (err) next(err)

    // store user information in session, typically a user id
    req.session.user = existingUser._id

    // save the session before redirection to ensure page
    // load does not happen before session is saved
    req.session.save(function (err) {
      if (err) return next(err)

      console.log(req.session)

      return res.status(200).json({
        message: 'logged in',
        session: JSON.stringify(req.session),
        userId: existingUser.userId
      })
    })
  })
}

/**
 * @description Sign Out user
 */
const signOut = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
    req.logout()
    localStorage.removeItem('userId')
    res.status(200).json({ message: 'User signed out successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Sign out server error' })
  }
}

module.exports = {
  signUp,
  signUp,
  signIn,
  signOut
};