import React from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { deleteSpot } from '../../store/spots'

function DeleteListingModal({ showListingModal, setShowListingModal, spotId, userId }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowListingModal(false)
    await dispatch(deleteSpot(spotId))
    history.push(`/users/${userId}`)
  }

  return (
    <>
      {showListingModal && (
        <Modal onClose={() => setShowListingModal(false)}>
          <h2>Are you sure?</h2>
          <form onSubmit={handleSubmit}>
            <button type="submit">Confirm</button>
          </form>
          <button onClick={() => setShowListingModal(false)}>Cancel</button>
        </Modal>
      )}
    </>
  );
}

export default DeleteListingModal;