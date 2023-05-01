const Review = require('../models/ReviewModel');

// Add Route to create review
const createReview = async (req, res) => {}

// Add Route to get list of reviews by user id
const getReviewsByUserId = async (req, res) => {}

// Add Route to get one review by id
const getReviewById = async (req, res) => {}

// Add Route to update review by id
const updateReviewById = async (req, res) => {}

// Add route to delete review by id
const deleteReviewById = async (req, res) => {}

module.exports = {
    getReviewsByUserId,
    getReviewById,
    updateReviewById,
    deleteReviewById,
    createReview
};