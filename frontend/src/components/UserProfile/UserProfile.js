import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpots } from '../../store/spots';
import { fetchBookings } from '../../store/bookings';
import { fetchReviews } from '../../store/reviews';
import { useParams } from 'react-router-dom';
// import DeleteListingModal from '../DeleteListingModal/index';
// import DeleteBookingModal from '../DeleteBookingModal/index';
// import DeleteReviewModal from '../DeleteReviewModal/index';
import styles from './UserProfile.module.css';
import ReviewComponent from './ReviewComponent';
import BookingComponent from './BookingComponent';
import ListingComponent from './ListingComponent';

function UserProfile() {
  // const history = useHistory();
  const dispatch = useDispatch();
  const { userId } = useParams();
  // const [showListingModal, setShowListingModal] = useState(false)
  // const [showBookingModal, setShowBookingModal] = useState(false)
  // const [showReviewModal, setShowReviewModal] = useState(false)
  const spots = useSelector(state => Object.values(state.spots))
  const userSpots = spots.filter(spot => Number(spot.userId) === Number(userId))
  const bookings = useSelector(state => Object.values(state.bookings))
  const userBookings = bookings.filter(booking => Number(booking.userId) === Number(userId))
  const reviews = useSelector(state => ({ ...state.reviews }))
  const userReviews = Object.values(reviews).filter(review => Number(review.userId) === Number(userId))

  useEffect(() => {
    dispatch(fetchSpots());
    dispatch(fetchBookings());
    dispatch(fetchReviews());
  }, [dispatch])

  // const handleListingClick = (e) => {
  //   e.preventDefault();
  //   setShowListingModal(true)
  // }

  // const handleBookingClick = (e) => {
  //   e.preventDefault();
  //   setShowBookingModal(true)
  // }

  // const handleReviewClick = (e) => {
  //   e.preventDefault();
  //   setShowReviewModal(true)
  // }

  return (
    <div className={styles.profileContainer}>
      <div>My Listings</div>
      <div className={styles.smallDiv}>
        {userSpots && userSpots.map((spot) =>
          <ListingComponent key={spot?.id} spot={spot} userId={userId} />
          // <div className={styles.buttonsDiv} key={spot?.id}>
          //   <div>{spot?.name}</div>
          //   <div className={styles.threeButtons}>
          //     <div>
          //       <form onSubmit={(e) => {
          //         e.preventDefault();
          //         history.push(`/spots/${spot.id}`)
          //       }}>
          //         <button className={styles.buttons}
          //           type="submit"
          //         >
          //           View
          //         </button>
          //       </form>
          //     </div>
          //     <div>
          //       <button
          //         onClick={() => history.push(`/spots/${spot.id}/edit`)}
          //         className={styles.buttons}
          //       >
          //         Update
          //       </button>
          //     </div>
          //     <div>
          //       <button
          //         onClick={handleListingClick}
          //         className={styles.buttons}
          //       >
          //         Delete
          //       </button>
          //       {showListingModal && <DeleteListingModal showListingModal={showListingModal} setShowListingModal={setShowListingModal} spotId={spot.id} userId={userId} />}
          //     </div>
          //   </div>
          // </div>
        )}
      </div>
      <div>My Bookings</div>
      <div className={styles.smallDiv}>
        {userBookings && userBookings.map((booking) =>
          <BookingComponent key={booking?.id} booking={booking} userId={userId} />
          // <div className={styles.buttonsDiv} key={booking?.id}>
          //   <div>
          //     <div>Court: {booking?.Spot?.name}</div>
          //     <div>Date: {booking?.date}</div>
          //     <div>Time: {booking?.startTime.slice(0, 5)} - {booking?.endTime.slice(0, 5)}</div>
          //   </div>
          //   <div className={styles.threeButtons}>
          //     <div>
          //       <form onSubmit={(e) => {
          //         e.preventDefault();
          //         history.push(`/spots/${booking.Spot.id}`)
          //       }}>
          //         <button
          //           type="submit"
          //           className={styles.buttons}
          //         >
          //           View
          //         </button>
          //       </form>
          //     </div>
          //     <div>
          //       <button
          //         onClick={() => history.push(`/bookings/${booking.id}/edit`)}
          //         className={styles.buttons}
          //       >
          //         Update
          //       </button>
          //     </div>
          //     <div>
          //       <button
          //         onClick={handleBookingClick}
          //         className={styles.buttons}
          //       >
          //         Delete
          //       </button>
          //       {showBookingModal && <DeleteBookingModal showBookingModal={showBookingModal} setShowBookingModal={setShowBookingModal} userId={userId} bookingId={booking.id} />}
          //     </div>
          //   </div>
          // </div>
        )}
      </div>
      <div>My Reviews</div>
      <div className={styles.smallDiv}>
        {userReviews && userReviews.map((review) =>
          <ReviewComponent key={review?.id} review={review} userId={userId} />
          // <div className={styles.buttonsDiv} key={review?.id}>
          //   <div>
          //     <div>Rating: {review?.rating}</div>
          //     <div>Review: {review?.review}</div>
          //     <div>Court: {review?.Spot?.name}</div>
          //   </div>
          //   <div className={styles.threeButtons}>
          //     <div>
          //       <button
          //         onClick={() => history.push(`/spots/${review.Spot.id}`)}
          //         className={styles.buttons}
          //       >
          //         View
          //       </button>
          //     </div>
          //     <div>
          //       <button
          //         onClick={handleReviewClick}
          //         className={styles.buttons}
          //       >
          //         Delete
          //       </button>
          //       {showReviewModal && <DeleteReviewModal showReviewModal={showReviewModal} setShowReviewModal={setShowReviewModal} userId={userId} reviewId={review.id} />}
          //     </div>
          //   </div>
          // </div>

        )}
      </div>
    </div>
  )
}

export default UserProfile;