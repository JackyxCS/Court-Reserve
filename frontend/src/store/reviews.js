import { csrfFetch } from "./csrf";

// Define Action Types as Constants
const SET_REVIEWS = 'reviews/setReviews'
const ADD_REVIEW = 'reviews/addReview'
const REMOVE_REVIEW = 'reviews/removeReview'

// Define Action Creators
const setReviews = (reviews) => ({
  type: SET_REVIEWS,
  reviews
})

const addReview = (review) => ({
  type: ADD_REVIEW,
  review
})

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
})

// Define Thunks
export const fetchReviews = () => async (dispatch) => {
  const res = await fetch('/api/reviews');
  const reviews = await res.json();
  dispatch(setReviews(reviews))
}

export const postReview = (review) => async (dispatch) => {
  const res = await csrfFetch('/api/reviews', {
    method: 'POST',
    body: JSON.stringify(review)
  })

  if (res.ok) {
    const newReview = await res.json()
    dispatch(addReview(newReview))
    return newReview
  }
}

export const deleteReview = (reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE'
  })

  if (res.ok) {
    dispatch(removeReview(reviewId))
  }
}

// Define an initial state
const initialState = {};


// Define a reducer
const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REVIEWS: {
      const newState = { ...state }
      action.reviews.forEach(review => {
        newState[review.id] = review
      })
      return newState
    }
    case ADD_REVIEW: {
      const newState = { ...state }
      newState[action.review.id] = action.review
      return newState
    }
    case REMOVE_REVIEW: {
      const newState = { ...state }
      delete newState[action.reviewId]
      return newState
    }
    default:
      return state;
  }
}



// Export the reducer
export default reviewsReducer;