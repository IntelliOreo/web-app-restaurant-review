import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    userId: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

const User = model('User', userSchema)

export default User
