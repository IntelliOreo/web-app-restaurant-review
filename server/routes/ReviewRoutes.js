const express = require('express');
const verifyJwt = require('../middlewares/verifyJwt');
const {
  createReview,
  getReviewsByUserId,
  getReviewById,
  updateReviewById,
  deleteReviewById
} = require('../controllers/ReviewControllers');

// Intialize router
const router = express.Router()

// Route to create review
router.post('/create', verifyJwt, createReview)

// Route to get list of reviews by user id
router.get('/userReviews/:userId', verifyJwt, getReviewsByUserId)

// Routes to Get, Update, and Delete review by id
router
  .route('/:reviewId')
  .get(verifyJwt, getReviewById)
  .put(verifyJwt, updateReviewById)
  .delete(verifyJwt, deleteReviewById)

module.exports = router;
