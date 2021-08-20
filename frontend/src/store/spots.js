import { csrfFetch } from "./csrf";

// Define Action Types as Constants
const SET_SPOTS = 'spots/setSpots'
const ADD_SPOT = 'spots/addSpot'
const UPDATE_SPOT = 'spots/updateSpot'
const REMOVE_SPOT = 'spots/removeSpot'

// Define Action Creators
const setSpots = (spots) => ({
  type: SET_SPOTS,
  spots
});

const addSpot = (listing) => ({
  type: ADD_SPOT,
  listing
})

const updateSpot = (spot) => ({
  type: UPDATE_SPOT,
  spot
})

const removeSpot = (spotId) => ({
  type: REMOVE_SPOT,
  spotId
})

// Define Thunks
export const fetchSpots = () => async (dispatch) => {
  const res = await fetch('/api/spots');
  const spots = await res.json();
  console.log('spots', spots)
  dispatch(setSpots(spots))
};

export const createUpdate = (court) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${court.id}`, {
    method: 'PUT',
    // headers: { 'content-type': 'application/json' },
    body: JSON.stringify(court)
  });

  if (res.ok) {
    const updatedSpot = await res.json()
    dispatch(updateSpot(updatedSpot))
    return updatedSpot
  }
}

export const postSpot = (court) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots`, {
    method: 'POST',
    // headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(court)
  })

  console.log('res', res);

  if (res.ok) {
    const listing = await res.json();
    dispatch(addSpot(listing));
    return listing;
  }
}

export const deleteSpot = (spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'DELETE'
  })

  if (res.ok) {
    dispatch(removeSpot(spotId))
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
    case UPDATE_SPOT: {
      const newState = { ...state }
      newState[action.spot.id] = action.spot
      return newState
    }
    case REMOVE_SPOT: {
      const newState = { ...state }
      delete newState[action.spotId]
      return newState
    }
    default:
      return state;
  }
}

// Export the reducer
export default spotsReducer;