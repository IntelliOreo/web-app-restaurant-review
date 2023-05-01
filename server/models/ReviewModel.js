const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({}, { timestamps: true });

const Review = model('Review', reviewSchema);
module.exports = Review;