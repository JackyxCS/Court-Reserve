import { csrfFetch } from "./csrf";

// Define Action Types as Constants
const SET_BOOKINGS = 'bookings/setBookings'
const POST_BOOKING = 'bookings/postBooking'
const UPDATE_BOOKING = 'bookings/updateBooking'
const REMOVE_BOOKING = 'bookings/removeBooking'

// Define Action Creators
const setBookings = (bookings) => ({
  type: SET_BOOKINGS,
  bookings
});

const addBooking = (booking) => ({
  type: POST_BOOKING,
  booking
})

const updateBooking = (booking) => ({
  type: UPDATE_BOOKING,
  booking
})

const removeBooking = (bookingId) => ({
  type: REMOVE_BOOKING,
  bookingId
})

// Define Thunks
export const fetchBookings = () => async (dispatch) => {
  const res = await csrfFetch('/api/bookings');
  const bookings = await res.json();
  dispatch(setBookings(bookings))
};

export const changeBooking = (booking) => async (dispatch) => {
  const res = await csrfFetch(`/api/bookings/${booking.id}/edit`, {
    method: 'PUT',
    body: JSON.stringify(booking)
  })

  if (res.ok) {
    const updatedBooking = await res.json()
    dispatch(updateBooking(updatedBooking))
    return updatedBooking
  }
}

export const postBooking = (booking) => async (dispatch) => {
  const res = await csrfFetch('/api/bookings', {
    method: 'POST',
    body: JSON.stringify(booking)
  })

  if (res.ok) {
    const newBooking = await res.json();
    dispatch(addBooking(newBooking))
    return newBooking;
  }
}

export const deleteBooking = (bookingId) => async (dispatch) => {
  const res = await csrfFetch(`/api/bookings/${bookingId}`, {
    method: 'DELETE'
  })

  if (res.ok) {
    dispatch(removeBooking(bookingId))
  }
}

// Define an initial state
const initialState = {};

// Define a reducer
const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKINGS:
      const newState = { ...state };
      action.bookings.forEach(booking => {
        newState[booking.id] = booking;
      });
      return newState;
    case POST_BOOKING: {
      const newState = { ...state }
      newState[action.booking.id] = action.booking
      return newState
    }
    case UPDATE_BOOKING: {
      const newState = { ...state }
      newState[action.booking.id] = action.booking
      return newState
    }
    case REMOVE_BOOKING: {
      const newState = { ...state }
      delete newState[action.bookingId]
      return newState
    }
    default:
      return state;
  }
}

// Export the reducer
export default bookingsReducer;