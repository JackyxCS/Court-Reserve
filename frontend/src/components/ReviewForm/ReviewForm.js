import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchReviews, postReview } from '../../store/reviews';
import styles from './ReviewForm.module.css'

const ReviewForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { spotId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const { id: userId } = sessionUser

  const [review, setReview] = useState('')
  const [rating, setRating] = useState('initial')
  const [validationErrors, setValidationErrors] = useState([])

  useEffect(() => {
    const errors = [];
    if (review.length === 0) errors.push("Please leave a review")
    if (!['1','2','3','4','5'].includes(rating)) errors.push("Please choose a valid rating")
    setValidationErrors(errors)
  }, [review, rating])

  const reset = () => {
    setReview('');
    setRating('initial');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId,
      spotId,
      review,
      rating
    }

    let newReview = await dispatch(postReview(payload))
    if (newReview) {
      reset()
      dispatch(fetchReviews());
      history.push(`/spots/${spotId}`)
    }
  }

  return (
    <form className={styles.reviewForm} onSubmit={handleSubmit}>
      <div className={styles.reviewText}>Leave a Review</div>
      {/* <ul className="errors">
        {validationErrors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul> */}
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className={styles.selectComponents}
      >
        <option disabled value='initial'>Rating</option>
        <option value={5}>5</option>
        <option value={4}>4</option>
        <option value={3}>3</option>
        <option value={2}>2</option>
        <option value={1}>1</option>
      </select>
      <textarea
        placeholder="Tell everyone about your experience"
        name="review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className={styles.textareaComponents}
      />
      <button
        type="submit"
        disabled={validationErrors.length > 0}
        className={styles.reviewFormButton}
      >
        Submit Review
      </button>
    </form>
  )
}

export default ReviewForm;