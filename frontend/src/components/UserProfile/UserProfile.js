import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../store/profile';
import { useParams } from 'react-router-dom'

function UserProfile() {

  const dispatch = useDispatch();
  const { userId } = useParams();
  const userSpots = useSelector(state => (state.userProfile.userSpots))
  const userBookings = useSelector(state => state.userProfile.userBookings)
  const userReviews = useSelector(state => state.userProfile.userReviews)

  useEffect(() => {
    dispatch(fetchProfile(userId));
  }, [dispatch, userId])

  return (
    <>
      <div>
        {userSpots && Object.values(userSpots).map((spot) =>
          <div key={spot.id}> My Listings
            <div>{spot.name}</div>
            <div>View</div>
            <div>Update</div>
            <div>Delete</div>
          </div>
        )}
      </div>
      <div>
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
      </div>
    </>
  )
}

export default UserProfile;