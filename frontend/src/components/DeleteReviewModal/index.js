import React from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { deleteReview } from '../../store/reviews'

function DeleteReviewModal({ showModal, setShowModal, userId, reviewId }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowModal(false)
    await dispatch(deleteReview(reviewId))
    history.push(`/users/${userId}`)
  }

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Are you sure?</h2>
          <form onSubmit={handleSubmit}>
            <button type="submit">Confirm</button>
          </form>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </Modal>
      )}
    </>
  );
}

export default DeleteReviewModal;