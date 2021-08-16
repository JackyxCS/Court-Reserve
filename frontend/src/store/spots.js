// Define Action Types as Constants
const SET_SPOTS = 'spots/setSpots'

// Define Action Creators
const setSpots = (spots) => ({
  type: SET_SPOTS,
  spots
});

// Define Thunks
export const fetchSpots = () => async (dispatch) => {
  const res = await fetch('/api/spots');
  const spots = await res.json();
  dispatch(setSpots(spots))
};

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
    default:
      return state;
  }
}

// Export the reducer
export default spotsReducer;