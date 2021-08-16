import { csrfFetch } from "./csrf";

// Define Action Types as Constants
const SET_SPOTS = 'spots/setSpots'
const GET_SPOT = 'spots/getSpot'
const ADD_SPOT = 'spots/addSpot'
const GET_USER_SPOTS = 'spots/getUserSpots'

// Define Action Creators
const setSpots = (spots) => ({
  type: SET_SPOTS,
  spots
});

const getSpot = (spot) => ({
  type: GET_SPOT,
  spot
})

const getUserSpots = (userSpots) => ({
  type: GET_USER_SPOTS,
  userSpots
})

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

export const fetchSpot = (id) => async (dispatch) => {
  const res = await fetch(`/api/spots/${id}`)
  const spot = await res.json();
  dispatch(getSpot(spot))
}

export const fetchUserSpots = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}`);
  const userSpots = await res.json();
  dispatch(getUserSpots(userSpots))
}

export const postSpot = (court) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(court)
  })

  if (res.ok) {
    const listing = await res.json();
    dispatch(addSpot(listing))
    return listing
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
    case GET_SPOT: {
      return { ...state, ...action.spot }
    }
    case ADD_SPOT: {
      const newState = { ...state }
      newState[action.listing.id] = action.listing
      return newState
    }
    case GET_USER_SPOTS: {
      const newState = { ...state }
      action.userSpots.forEach(userSpot => {
        newState[userSpot.id] = userSpot
      });
      console.log('newState', newState)
      return newState;
    }
    default:
      return state;
  }
}

// Export the reducer
export default spotsReducer;