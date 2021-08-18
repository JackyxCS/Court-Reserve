// import hooks from 'react'
import { useEffect } from 'react';
// import hooks from 'react-redux
import { useDispatch, useSelector } from 'react-redux';
// import the thunk creator
import { fetchReviews } from '../../store/reviews';

const SpotReviews = ({ spotId }) => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => Object.values(state.reviews))
  const spotReviews = reviews.filter(review => Number(review.spotId) === Number(spotId))

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <div> Reviews
      {!!spotReviews.length && spotReviews.map((review) =>
        <div key={review.id}>
          <p>Rating: {review.rating}</p>
          <p>Review: {review.review}</p>
        </div>
      )}
    </div>
  )
}

export default SpotReviews