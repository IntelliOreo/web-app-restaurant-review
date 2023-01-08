import mongoose from 'mongoose'

const connectDb = async () => {
  try {
    const uri = process.env.MONGO_URI

    await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })

    console.log('Connected to database')
  } catch (error) {
    console.log('Unable to connect to db')
    console.log(error)
  }
}

export default connectDb
