import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    name: {
      type: string,
      required: true
    },
    email: {
      type: string,
      required: true
    },
    password: {
      type: string,
      required: true
    },
    token: {
      type: string,
      default: ''
    }
  },
  { timestamps: true }
)

const User = model('User', userSchema)

export default User
