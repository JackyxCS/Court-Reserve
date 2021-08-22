// import hooks from 'react'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { states } from '../../geographyData/geographyData'
import { countries } from '../../geographyData/geographyData'
import { useDispatch } from 'react-redux';
import { postSpot } from '../../store/spots';
import "./ListingForm.css";

const ListingForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('initial');
  const [country, setCountry] = useState('initial');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageURL1, setImageURL1] = useState('')
  const [imageURL2, setImageURL2] = useState('')
  const [imageURL3, setImageURL3] = useState('')
  const [imageURL4, setImageURL4] = useState('')
  const [imageURL5, setImageURL5] = useState('')
  const [validationErrors, setValidationErrors] = useState([])

  useEffect(() => {
    const errors = [];
    if (name.length === 0) errors.push("Name field is required")
    if (address.length === 0) errors.push("Address field is required")
    if (city.length === 0) errors.push("City field is required")
    if (!state) errors.push("State field is required")
    if (!lat) errors.push("Lat field is required")
    if (!lng) errors.push("Lng field is required")
    if (price === 0) errors.push("Price field is required")
    if (!imageURL1) errors.push("Image field is required")
    if (!imageURL2) errors.push("Image field is required")
    if (!imageURL3) errors.push("Image field is required")
    if (!imageURL4) errors.push("Image field is required")
    if (!imageURL5) errors.push("Image field is required")
    setValidationErrors(errors)
  }, [name, address, city, state, price, imageURL1, imageURL2, imageURL3, imageURL4, imageURL5, lat, lng]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validationErrors > 0) return;

    const court = {
      name,
      address,
      city,
      state,
      country,
      lat,
      lng,
      price,
      imageURL1,
      imageURL2,
      imageURL3,
      imageURL4,
      imageURL5,
    }

    console.log(court)

    let spot = await dispatch(postSpot(court))
    if (spot) {
      history.push(`/spots/${spot.id}`)
    }
  }

  return (
    <form className="listingForm" onSubmit={handleSubmit}>
      <label>List Your Court</label>
      {/* <ul className="errors">
        {validationErrors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul> */}

      <input
        placeholder="Court Name"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Address"
        type="text"
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      <input
        placeholder="City"
        type="text"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />

      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
        required
      >
        <option disabled value='initial'> -- State --
        </option>
        {states.map(state => (
          <option
            key={state}
          >
            {state}
          </option>
        ))}
      </select>

      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
      >
        <option disabled value='initial'> -- Country --
        </option>
        {countries.map(country => (
          <option
            key={country}
          >
            {country}
          </option>
        ))}
      </select>

      <input
        placeholder="Latitude"
        type="text"
        name="lat"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        required
      />

      <input
        placeholder="Longitude"
        type="text"
        name="lng"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
        required
      />

      <input
        placeholder="Hourly Rate"
        type="number"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <input
        placeholder="Image URL1"
        type="url"
        name="picture"
        value={imageURL1}
        onChange={(e) => setImageURL1(e.target.value)}
        required
      />

      <input
        placeholder="Image URL2"
        type="url"
        name="picture"
        value={imageURL2}
        onChange={(e) => setImageURL2(e.target.value)}
        required
      />

      <input
        placeholder="Image URL3"
        type="url"
        name="picture"
        value={imageURL3}
        onChange={(e) => setImageURL3(e.target.value)}
        required
      />

      <input
        placeholder="Image URL4"
        type="url"
        name="picture"
        value={imageURL4}
        onChange={(e) => setImageURL4(e.target.value)}
        required
      />

      <input
        placeholder="Image URL5"
        type="url"
        name="picture"
        value={imageURL5}
        onChange={(e) => setImageURL5(e.target.value)}
        required
      />

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