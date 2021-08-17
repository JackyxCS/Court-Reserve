// import hooks from 'react'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
// import styles from './ListingForm.module.css'
import { states } from '../../geographyData/geographyData'
import { countries } from '../../geographyData/geographyData'
import { useDispatch } from 'react-redux';
import { postSpot } from '../../store/spots';

const ListingForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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

    let spot = await dispatch(postSpot(court))
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
        List!
      </button>
    </form>
  )
}

export default ListingForm;