import { csrfFetch } from "./csrf";

// Define Action Types as Constants
const SET_SPOTS = 'spots/setSpots'
const ADD_SPOT = 'spots/addSpot'

// Define Action Creators
const setSpots = (spots) => ({
  type: SET_SPOTS,
  spots
});

const addSpot = (listing) => ({
  type: ADD_SPOT,
  listing
})

// Define Thunks
export const fetchSpots = () => async (dispatch) => {
  const res = await fetch('/api/spots');
  const spots = await res.json();
  dispatch(setSpots(spots))
};

export const postSpot = (court) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(court)
  })

  if (res.ok) {
    const listing = await res.json();
    dispatch(addSpot(listing));
    return listing;
  }
}

// Define an initial state
const initialState = {};

// Define a reducer
const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPOTS:
      const newState = { ...state };
      action.spots.forEach(spot => {
        newState[spot.id] = spot;
      });
      return newState;
    case ADD_SPOT: {
      const newState = { ...state }
      newState[action.listing.id] = action.listing
      return newState
    }
    default:
      return state;
  }
}

// Export the reducer
export default spotsReducer;