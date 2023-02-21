import { Schema, model } from 'mongoose'
import session from 'express-session'

const sessionSchema = new Schema({}, { timestamps: true })

const Session = model('Session', sessionSchema)
export default Session
