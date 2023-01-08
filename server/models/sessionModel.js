import { Schema, model } from 'mongoose'

const sessionSchema = new Schema({}, { timestamps: true })

const Session = model('Session', sessionSchema)

export default Session
