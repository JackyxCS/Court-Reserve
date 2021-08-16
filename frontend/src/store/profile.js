// Define Action Types as Constants
const SET_USER_PROFILE = 'profile/setProfile'

// Define Action Creators
const setUserProfile = (userSpots, userBookings, userReviews) => ({
  type: SET_USER_PROFILE,
  userProfile: { userSpots, userBookings, userReviews }
})

// Define Thunks
export const fetchProfile = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}`);
  const { userSpots, userBookings, userReviews } = await res.json();
  dispatch(setUserProfile(userSpots, userBookings, userReviews))
};

// Define an initial state
const initialState = {};

// Define a reducer

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      action.userProfile.userBookings.forEach(booking => {
        delete action.userProfile.userBookings[0]
        action.userProfile.userBookings[booking.id] = booking
      })
      action.userProfile.userBookings = { ...action.userProfile.userBookings }

      action.userProfile.userReviews.forEach(review => {
        delete action.userProfile.userReviews[0]
        action.userProfile.userReviews[review.id] = review
      })
      action.userProfile.userReviews = { ...action.userProfile.userReviews }

      action.userProfile.userSpots.forEach(spot => {
        delete action.userProfile.userSpots[0]
        action.userProfile.userSpots[spot.id] = spot
      })
      action.userProfile.userSpots = { ...action.userProfile.userSpots }

      return { ...state, ...action.userProfile }
    }
    default:
      return state;
  }
}

// Export the reducer
export default profileReducer;