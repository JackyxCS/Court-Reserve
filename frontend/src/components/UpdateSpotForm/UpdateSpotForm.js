import { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { states } from '../../geographyData/geographyData'
import { countries } from '../../geographyData/geographyData'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpots, createUpdate } from "../../store/spots";

const UpdateSpotForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { spotId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const { id: userId } = sessionUser
  const spot = useSelector(state => state.spots[spotId])

  console.log(spot)

  const [address, setAddress] = useState(spot.address);
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
    dispatch(fetchSpots())
  }, [dispatch])

  useEffect(() => {
    const errors = [];
    if (name.length === 0) errors.push("Name field is required")
    if (address.length === 0) errors.push("Address field is required")
    if (city.length === 0) errors.push("City field is required")
    if (!state) errors.push("State field is required")
    if (price === 0) errors.push("Price field is required")
    if (!imageURL) errors.push("Image field is required")
    setValidationErrors(errors)
  }, [name, address, city, state, price, imageURL]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const court = {
      name,
      address,
      city,
      state,
      country,
      price,
      imageURL
    }

    let spot = await dispatch(createUpdate(court))
    if (spot) {
      history.push(`/spots/${spot.id}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>List Your Court</h1>
      <ul className="errors">
        {validationErrors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <label>
        Court Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Address
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label>
        City
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label>
        State
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          {states.map(state => (
            <option
              key={state}
            >
              {state}
            </option>
          ))}
        </select>
      </label>
      <label>
        Country
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {countries.map(country => (
            <option
              key={country}
            >
              {country}
            </option>
          ))}
        </select>
      </label>
      <label>
        Hourly Rate
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        Image URL
        <input
          type="url"
          name="picture"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </label>
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

export default UpdateSpotForm;