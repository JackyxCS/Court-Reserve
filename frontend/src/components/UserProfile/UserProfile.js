import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpots } from '../../store/spots';
import { useParams, useHistory } from 'react-router-dom';
import DeleteModal from '../DeleteModal';

function UserProfile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [showModal, setShowModal] = useState(false)
  const spots = useSelector(state => Object.values(state.spots))
  const userSpots = spots.filter(spot => Number(spot.userId) === Number(userId))
  // const userBookings = useSelector(state => state.userProfile.userBookings)
  // const userReviews = useSelector(state => state.userProfile.userReviews)

  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch])

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(true)
  }

  return (
    <>
      <div>
        <div>My Listings</div>
        {userSpots && userSpots.map((spot) =>
          <div key={spot.id}>
            <div>{spot.name}</div>
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
              <form onSubmit={(e) => {
                e.preventDefault();
                history.push(`/spots/${spot.id}/edit`)
              }}>
                <button
                  type="submit"
                >
                  Update
                </button>
              </form>
            </div>
            <div>
              {/* <form onSubmit={deleteCourt}> */}
              <button
                onClick={handleClick}
              >
                Delete
              </button>
              {showModal && <DeleteModal showModal={showModal} setShowModal={setShowModal} spotId={spot.id} userId={userId}/>}
              {/* </form> */}
            </div>
          </div>
        )}
      </div>
      {/* <div>
        {userBookings && Object.values(userBookings).map((booking) =>
          <div key={booking.id}> My Bookings
            <div>{booking.Spot.name}</div>
            <div>View</div>
            <div>Update</div>
            <div>Delete</div>
          </div>
        )}
      </div>
      <div>
        {userReviews && Object.values(userReviews).map((review) =>
          <div key={review.id}> My Reviews
            <div>{review.review}</div>
            <div>{review.Spot.name}</div>
            <div>View</div>
            <div>Update</div>
            <div>Delete</div>
          </div>
        )}
      </div> */}
    </>
  )
}

export default UserProfile;