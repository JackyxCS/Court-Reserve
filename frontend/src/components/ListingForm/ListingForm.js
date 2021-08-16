// import hooks from 'react'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
// import styles from './ListingForm.module.css'
import { states } from '../../geographyData/geographyData'
import { countries } from '../../geographyData/geographyData'

const ListingForm = () => {
  const history = useHistory();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('US');
  // const [lat, setLat] = useState();
  // const [lng, setLng] = useState();
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState('')
  const [validationErrors, setValidationErrors] = useState([])

  useEffect(() => {
    const errors = [];
    if (name.length === 0) errors.push("Name field is required")
    if (address.length === 0) errors.push("Address field is required")
    if (city.length === 0) errors.push("City field is required")
    if (state.length === 0) errors.push("State field is required")
    if (price === 0) errors.push("Price field is required")
    setValidationErrors(errors)
  }, [name, address, city, state, price]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const courtSubmission = {
      name,
      address,
      city,
      state,
      country,
      price
    }

    const res = fetch(`/api/spots`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(courtSubmission)
    })
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
        Upload Image
        <input
          type="file"
          name="picture"
          value={file}
          onChange={(e) => setFile(e.target.file)}
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