import React from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { deleteReview } from '../../store/reviews'

function DeleteReviewModal({ showReviewModal, setShowReviewModal, userId, reviewId }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowReviewModal(false)
    await dispatch(deleteReview(reviewId))
    history.push(`/users/${userId}`)
  }

  return (
    <>
      {showReviewModal && (
        <Modal onClose={() => setShowReviewModal(false)}>
          <h2>Are you sure?</h2>
          <form onSubmit={handleSubmit}>
            <button type="submit">Confirm</button>
          </form>
          <button onClick={() => setShowReviewModal(false)}>Cancel</button>
        </Modal>
      )}
    </>
  );
}

export default DeleteReviewModal;