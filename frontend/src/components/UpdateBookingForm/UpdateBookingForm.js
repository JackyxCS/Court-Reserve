import { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { states } from '../../geographyData/geographyData'
import { countries } from '../../geographyData/geographyData'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings, changeBooking } from "../../store/bookings";

const UpdateBookingForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { spotId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const { id: userId } = sessionUser
  const spot = useSelector(state => state.spots[spotId])

  useEffect(() => {
    dispatch(fetchBookings())
  }, [dispatch])

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState(states[0]);
  const [country, setCountry] = useState(countries[0]);
  // const [lat, setLat] = useState();
  // const [lng, setLng] = useState();
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [imageURL, setImageURL] = useState('')
  const [validationErrors, setValidationErrors] = useState([])

  useEffect(() => {
    setAddress(spot ? spot.address : '');
    setCity(spot ? spot.city : '');
    setState(spot ? spot.state : '');
    setCountry(spot ? spot.country : '');
    setName(spot ? spot.name : '');
    setPrice(spot ? spot.price : '');
    setImageURL(spot ? spot.Images[0].url : '');
  }, [spot])


  useEffect(() => {
    const errors = [];
    if (name?.length === 0) errors.push("Name field is required")
    if (address?.length === 0) errors.push("Address field is required")
    if (city?.length === 0) errors.push("City field is required")
    if (!state) errors.push("State field is required")
    if (price === 0) errors.push("Price field is required")
    if (!imageURL) errors.push("Image field is required")
    setValidationErrors(errors)
  }, [name, address, city, state, price, imageURL]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const court = {
      id: spotId,
      name,
      address,
      city,
      state,
      country,
      price,
      imageURL
    }

    let spot = await dispatch(changeBooking(court))
    console.log(spot)
    if (spot) {
      history.push(`/spots/${spot.id}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Update Your Booking</h1>
      <ul className="errors">
        {validationErrors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      
      <button
        type="submit"
        disabled={validationErrors.length > 0}
      >
        Update
      </button>
      <button
        onClick={(e) => history.push(`/users/${userId}`)}
      >
        Cancel
      </button>
    </form>
  )
}

export default UpdateBookingForm;