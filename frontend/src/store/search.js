import { csrfFetch } from "./csrf";

// Define Action Types as Constants
const SET_SEARCH = 'spots/setSearch'

// Define Action Creators
const setSearch = (search) => ({
  type: SET_SEARCH,
  search
});

// Define Thunks
export const searchSpots = (searchInput) => async (dispatch) => {
  const res = await csrfFetch('/api/spots/search', {
    method: 'POST',
    body: JSON.stringify(searchInput)
  });

  if (res.ok) {
    const results = await res.json();
    dispatch(setSearch(results))
    return results
  }
};

// Define an initial state
const initialState = {};

// Define a reducer
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH: {
      const newState = {};
      action.search.forEach(result => {
        newState[result.id] = result;
      })
      return newState;
    }
    default:
      return state;
  }
}

// Export the reducer
export default searchReducer;