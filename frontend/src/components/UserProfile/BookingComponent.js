import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DeleteBookingModal from '../DeleteBookingModal/index';
import styles from './UserProfile.module.css';

const BookingComponent = ({ booking, userId }) => {
  
  const history = useHistory();

  const [showBookingModal, setShowBookingModal] = useState(false)

  const handleBookingClick = (e) => {
    e.preventDefault();
    setShowBookingModal(true)
  }

  return (
    <div className={styles.buttonsDiv} key={booking?.id}>
      <div>
        <div>Court: {booking?.Spot?.name}</div>
        <div>Date: {booking?.date}</div>
        <div>Time: {booking?.startTime.slice(0, 5)} - {booking?.endTime.slice(0, 5)}</div>
      </div>
      <div className={styles.threeButtons}>
        <div>
          <form onSubmit={(e) => {
            e.preventDefault();
            history.push(`/spots/${booking.Spot.id}`)
          }}>
            <button
              type="submit"
              className={styles.buttons}
            >
              View
            </button>
          </form>
        </div>
        <div>
          <button
            onClick={() => history.push(`/bookings/${booking.id}/edit`)}
            className={styles.buttons}
          >
            Update
          </button>
        </div>
        <div>
          <button
            onClick={handleBookingClick}
            className={styles.buttons}
          >
            Delete
          </button>
          {showBookingModal && <DeleteBookingModal showBookingModal={showBookingModal} setShowBookingModal={setShowBookingModal} userId={userId} bookingId={booking.id} />}
        </div>
      </div>
    </div>
  )
}

export default BookingComponent;