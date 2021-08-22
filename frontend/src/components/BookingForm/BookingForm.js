// import hooks from 'react'
import { useEffect, useState } from 'react';
// import hooks from 'react-redux
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { startTimes, endTimes } from '../../timeData/timeData'
import DatePicker from "react-datepicker";
import { postBooking } from '../../store/bookings'
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import styles from './BookingForm.module.css'

const BookingForm = ({ price }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state?.session?.user);
  let userId;
  const { spotId } = useParams();

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
    const newDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

    if (sessionUser) {
      userId = sessionUser.id
    } else {
      alert('Please log in or sign up to make a reservation')
      return;
    }

    const booking = {
      userId,
      spotId,
      date: newDate,
      startTime,
      endTime
    }

    let newBooking = await dispatch(postBooking(booking))
    if (newBooking) {
      history.push(`/users/${userId}`)
    }
  }

  return (
    <form className={styles.reviewForm} onSubmit={handleSubmit}>
      <div className={styles.reviewText}>Create a Booking</div>
      <div className={styles.warningText}>You may only book a court for up to 2 hours</div>
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
        className={styles.selectComponents}
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
        className={styles.selectComponents}
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
      <div className={styles.priceDiv}>Price: ${(startTimes.includes(startTime) && endTimes.includes(endTime) && (endTime > startTime)) ? (price * (endTime.slice(0,2) - startTime.slice(0,2))) : '0'}</div>
      <button
        type="submit"
        disabled={validationErrors.length > 0}
        className={styles.BookingFormButton}
      >
        Book
      </button>
    </form>
  )
}

export default BookingForm;