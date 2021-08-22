// import hooks from 'react'
import { useEffect } from 'react';
// import hooks from 'react-redux
import { useDispatch, useSelector } from 'react-redux';
// import the thunk creator
import { fetchReviews } from '../../store/reviews';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from './SpotReviews.module.css'

const SpotReviews = ({ spotId }) => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => Object.values(state.reviews))
  const spotReviews = reviews.filter(review => Number(review.spotId) === Number(spotId))

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <>
      <div className={styles.reviewText}>Reviews</div>
      <div>
        {!!spotReviews.length && spotReviews?.map((review) =>
          <div className={styles.singleReview} key={review?.id}>
            <p className={styles.usernametag}>{review?.User?.username}</p>
            <p><FontAwesomeIcon icon={faStar} size='1x' color='#FF385C' /> {review?.rating}</p>
            <p>{review?.review}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default SpotReviews