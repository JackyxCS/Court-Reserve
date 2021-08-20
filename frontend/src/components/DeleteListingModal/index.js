import React from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { deleteSpot } from '../../store/spots'
import { fetchSpots } from '../../store/spots';
import { fetchBookings } from '../../store/bookings';
import { fetchReviews } from '../../store/reviews';
import styles from './DeleteListingModal.module.css'

function DeleteListingModal({ showListingModal, setShowListingModal, spotId, userId }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowListingModal(false)
    await dispatch(deleteSpot(spotId))
    await dispatch(fetchSpots());
    await dispatch(fetchBookings());
    await dispatch(fetchReviews());
    history.push(`/users/${userId}`)
  }

  return (
    <>
      {showListingModal && (
        <Modal onClose={() => setShowListingModal(false)}>
          <div className={styles.profileDeleteDivs}>
            <label>Are you sure?</label>
            <form onSubmit={handleSubmit}>
              <button type="submit"
                className={styles.deleteListingButton}>Confirm</button>
            </form>
            <button onClick={() => setShowListingModal(false)}
              className={styles.deleteListingButton}>Cancel</button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default DeleteListingModal;