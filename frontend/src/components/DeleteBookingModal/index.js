import React from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { deleteBooking } from '../../store/bookings'

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
    <>
      {showBookingModal && (
        <Modal onClose={() => setShowBookingModal(false)}>
          <h2>Are you sure?</h2>
          <form onSubmit={handleSubmit}>
            <button type="submit">Confirm</button>
          </form>
          <button onClick={() => setShowBookingModal(false)}>Cancel</button>
        </Modal>
      )}
    </>
  );
}

export default DeleteBookingModal;