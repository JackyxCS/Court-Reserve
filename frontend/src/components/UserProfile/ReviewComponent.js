import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DeleteReviewModal from '../DeleteReviewModal/index';
import styles from './UserProfile.module.css';

const ReviewComponent = ({ review, userId }) => {

  const history = useHistory();

  const [showReviewModal, setShowReviewModal] = useState(false)

  const handleReviewClick = (e) => {
    e.preventDefault();
    setShowReviewModal(true)
  }

  return (
    <div className={styles.buttonsDiv} key={review?.id}>
      <div>
        <div>Rating: {review?.rating}</div>
        <div>Review: {review?.review}</div>
        <div>Court: {review?.Spot?.name}</div>
      </div>
      <div className={styles.threeButtons}>
        <div>
          <button
            onClick={() => history.push(`/spots/${review.Spot.id}`)}
            className={styles.buttons}
          >
            View
          </button>
        </div>
        <div>
          <button
            onClick={handleReviewClick}
            className={styles.buttons}
          >
            Delete
          </button>
          {showReviewModal && <DeleteReviewModal showReviewModal={showReviewModal} setShowReviewModal={setShowReviewModal} userId={userId} reviewId={review.id} />}
        </div>
      </div>
    </div>
  )
}

export default ReviewComponent;
