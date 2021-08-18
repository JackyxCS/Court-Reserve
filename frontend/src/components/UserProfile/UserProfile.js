import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpots } from '../../store/spots';
import { fetchBookings } from '../../store/bookings';
import { fetchReviews } from '../../store/reviews';
import { useParams, useHistory } from 'react-router-dom';
import DeleteListingModal from '../DeleteListingModal/index';
import DeleteBookingModal from '../DeleteBookingModal/index';
import DeleteReviewModal from '../DeleteReviewModal/index';

function UserProfile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [showListingModal, setShowListingModal] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [showReviewModal, setShowReviewModal] = useState(false)
  const spots = useSelector(state => Object.values(state.spots))
  const userSpots = spots.filter(spot => Number(spot.userId) === Number(userId))
  const bookings = useSelector(state => Object.values(state.bookings))
  const userBookings = bookings.filter(booking => Number(booking.userId) === Number(userId))
  const reviews = useSelector(state => Object.values(state.reviews))
  const userReviews = reviews.filter(review => Number(review.userId) === Number(userId))

  useEffect(() => {
    dispatch(fetchSpots());
    dispatch(fetchBookings());
    dispatch(fetchReviews());
  }, [dispatch])

  const handleListingClick = (e) => {
    e.preventDefault();
    setShowListingModal(true)
  }

  const handleBookingClick = (e) => {
    e.preventDefault();
    setShowBookingModal(true)
  }

  const handleReviewClick = (e) => {
    e.preventDefault();
    setShowReviewModal(true)
  }

  return (
    <>
      <div>
        <div>My Listings</div>
        {userSpots && userSpots.map((spot) =>
          <div key={spot?.id}>
            <div>{spot?.name}</div>
            <div>
              <form onSubmit={(e) => {
                e.preventDefault();
                history.push(`/spots/${spot.id}`)
              }}>
                <button
                  type="submit"
                >
                  View
                </button>
              </form>
            </div>
            <div>
              <button
                onClick={() => history.push(`/spots/${spot.id}/edit`)}
              >
                Update
              </button>
            </div>
            <div>
              <button
                onClick={handleListingClick}
              >
                Delete
              </button>
              {showListingModal && <DeleteListingModal showListingModal={showListingModal} setShowListingModal={setShowListingModal} spotId={spot.id} userId={userId} />}
            </div>
          </div>
        )}
      </div>
      <div>
        <div>My Bookings</div>
        {userBookings && userBookings.map((booking) =>
          <div key={booking?.id}>
            <div>{booking?.Spot?.name}</div>
            <div>{booking?.date}</div>
            <div>{booking?.startTime.slice(0, 5)} - {booking?.endTime.slice(0, 5)}</div>
            <div>
              <form onSubmit={(e) => {
                e.preventDefault();
                history.push(`/spots/${booking.Spot.id}`)
              }}>
                <button
                  type="submit"
                >
                  View
                </button>
              </form>
            </div>
            <div>
              <button
                onClick={() => history.push(`/bookings/${booking.id}/edit`)}
              >
                Update
              </button>
            </div>
            <div>
              <button
                onClick={handleBookingClick}
              >
                Delete
              </button>
              {showBookingModal && <DeleteBookingModal showBookingModal={showBookingModal} setShowBookingModal={setShowBookingModal} userId={userId} bookingId={booking.id} />}
            </div>
          </div>
        )}
      </div>
      <div>
        <div>My Reviews</div>
        {userReviews && userReviews.map((review) =>
          <div key={review?.id}>
            <div>{review?.rating}</div>
            <div>{review?.review}</div>
            <div>{review?.Spot?.name}</div>
            <div>
              <button
                onClick={() => history.push(`/spots/${review.Spot.id}`)}
              >
                View
              </button>
            </div>
            <div>
              <button
                onClick={handleReviewClick}
              >
                Delete
              </button>
              {showReviewModal && <DeleteReviewModal showReviewModal={showReviewModal} setShowReviewModal={setShowReviewModal} userId={userId} reviewId={review.id}/>}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default UserProfile;