import express from 'express'
import verifyJwt from '../middlewares/verifyJwt.js'
import {
  createReview,
  getReviewsByUserId,
  getReviewById,
  updateReviewById,
  deleteReviewById
} from '../controllers/ReviewControllers.js'

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

export default router
