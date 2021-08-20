import { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startTimes, endTimes } from '../../timeData/timeData'
import { fetchBookings, changeBooking } from "../../store/bookings";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import styles from './UpdateBooking.module.css'

const UpdateBookingForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const { id: userId } = sessionUser
  const { bookingId } = useParams();
  const booking = useSelector(state => state.bookings[bookingId])
  const spotId = booking?.spotId

  const [date, setDate] = useState(moment().add(1, 'days')._d)
  const [startTime, setStartTime] = useState('initial')
  const [endTime, setEndTime] = useState('final')
  const [validationErrors, setValidationErrors] = useState([])

  const timeToNum = (startTime, endTime, errors) => {
    if (startTime !== "initial" && endTime !== "final") {
      let newStart = parseInt(startTime.split(":")[0], 10)
      let newEnd = parseInt(endTime.split(":")[0], 10)
      if (newEnd - newStart >= 3) {
        errors.push("You may only book a court for up to 2 hours")
      }
    }
  }

  useEffect(() => {
    dispatch(fetchBookings())
  }, [dispatch])

  useEffect(() => {
    const errors = [];
    if (date < new Date()) errors.push("Choose a valid date")
    if (!startTimes.includes(startTime)) errors.push("Start time field is required")
    if (!endTimes.includes(endTime)) errors.push("End time field is required")
    if (startTime >= endTime) errors.push("Must be valid time range")
    timeToNum(startTime, endTime, errors)
    setValidationErrors(errors)
  }, [date, startTime, endTime])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    const booking = {
      id: bookingId,
      userId,
      spotId,
      date: newDate,
      startTime,
      endTime
    }

    let newBooking = await dispatch(changeBooking(booking))
    if (newBooking) {
      history.push(`/users/${userId}`)
    }
  }

  return (
    <form className={styles.updateBooking} onSubmit={handleSubmit}>
      <label className={styles.updateBookingLabel}>Update Your Booking</label>
      {/* <ul className="errors">
        {validationErrors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul> */}
      <DatePicker
        placeholderText="Select Date"
        filterDate={date => {
          return new Date() < date;
        }}
        value={date}
        selected={date}
        dateFormat='yyyy-MM-dd'
        onChange={date => setDate(date)}
        inline
      />
      <select
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        className={styles.updateBookingSelect}
      >
        <option disabled value='initial'> -- start time --
        </option>
        {startTimes.map(time => (
          <option
            key={time}
          >
            {time}
          </option>
        ))}
      </select>
      <select
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        className={styles.updateBookingSelect}
      >
        <option disabled value='final'> -- end time --
        </option>
        {endTimes.map(time => (
          <option
            key={time}
          >
            {time}
          </option>
        ))}
      </select>
      <button
        type="submit"
        disabled={validationErrors.length > 0}
        className={styles.updateBookingButton}
      >
        Update
      </button>
      <button
        onClick={(e) => history.push(`/users/${userId}`)}
        className={styles.updateBookingButton}
      >
        Cancel
      </button>
    </form>
  )
}

export default UpdateBookingForm;