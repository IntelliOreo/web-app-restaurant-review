import { Schema, model } from 'mongoose'

const reviewSchema = new Schema({}, { timestamps: true })

const Review = model('Review', reviewSchema)
export default Review
