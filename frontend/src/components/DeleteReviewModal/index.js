import React from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { deleteReview } from '../../store/reviews'
import styles from './DeleteReviewModal.module.css'

function DeleteReviewModal({ showReviewModal, setShowReviewModal, userId, reviewId }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowReviewModal(false)
    console.log('userID', userId, 'reviewID', reviewId)
    await dispatch(deleteReview(reviewId))
    history.push(`/users/${userId}`)
  }

  return (
    <>
      {showReviewModal && (
        <Modal onClose={() => setShowReviewModal(false)}>
          <div className={styles.profileDeleteDivs}>
            <label>Are you sure?</label>
            <form onSubmit={handleSubmit}>
              <button type="submit"
                className={styles.deleteReviewButton}>Confirm</button>
            </form>
            <button onClick={() => setShowReviewModal(false)}
              className={styles.deleteReviewButton}>Cancel</button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default DeleteReviewModal;