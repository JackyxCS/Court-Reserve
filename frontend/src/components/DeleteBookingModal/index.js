import React from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { deleteBooking } from '../../store/bookings'
import styles from './DeleteBookingModal.module.css';

function DeleteBookingModal({ showBookingModal, setShowBookingModal, userId, bookingId }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowBookingModal(false)
    await dispatch(deleteBooking(bookingId))
    history.push(`/users/${userId}`)
  }

  return (
    <div className={styles.deleteDiv}>
      {showBookingModal && (
        <Modal onClose={() => setShowBookingModal(false)}>
          <label>Are you sure?</label>
          <form className={styles.deleteBooking} onSubmit={handleSubmit}>
            <button
              type="submit"
              className={styles.deleteBookingButton}
            >Confirm</button>
          </form>
          <button
            onClick={() => setShowBookingModal(false)}
            className={styles.deleteBookingButton}
          >Cancel</button>
        </Modal>
  )
}
    </div >
  );
}

export default DeleteBookingModal;