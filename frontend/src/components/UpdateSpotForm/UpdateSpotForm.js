import { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { states } from '../../geographyData/geographyData'
import { countries } from '../../geographyData/geographyData'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpots, createUpdate } from "../../store/spots";
import './UpdateSpotForm.css';

const UpdateSpotForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { spotId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const { id: userId } = sessionUser
  const spot = useSelector(state => state.spots[spotId])

  useEffect(() => {
    dispatch(fetchSpots())
  }, [dispatch])

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState(states[0]);
  const [country, setCountry] = useState(countries[0]);
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [imageURL1, setImageURL1] = useState('')
  const [imageURL2, setImageURL2] = useState('')
  const [imageURL3, setImageURL3] = useState('')
  const [imageURL4, setImageURL4] = useState('')
  const [imageURL5, setImageURL5] = useState('')
  const [validationErrors, setValidationErrors] = useState([])

  useEffect(() => {
    setAddress(spot ? spot.address : '');
    setCity(spot ? spot.city : '');
    setState(spot ? spot.state : '');
    setCountry(spot ? spot.country : '');
    setLat(spot ? spot.lat : '');
    setLng(spot ? spot.lng : '');
    setName(spot ? spot.name : '');
    setPrice(spot ? spot.price : '');
    setImageURL1(spot ? spot.Images[0].url : '');
    setImageURL2(spot ? spot.Images[1].url : '');
    setImageURL3(spot ? spot.Images[2].url : '');
    setImageURL4(spot ? spot.Images[3].url : '');
    setImageURL5(spot ? spot.Images[4].url : '');
  }, [spot])


  useEffect(() => {
    const errors = [];
    if (name?.length === 0) errors.push("Name field is required")
    if (address?.length === 0) errors.push("Address field is required")
    if (city?.length === 0) errors.push("City field is required")
    if (!state) errors.push("State field is required")
    if (price === 0) errors.push("Price field is required")
    if (!imageURL1) errors.push("Image field is required")
    if (!imageURL2) errors.push("Image field is required")
    if (!imageURL3) errors.push("Image field is required")
    if (!imageURL4) errors.push("Image field is required")
    if (!imageURL5) errors.push("Image field is required")
    setValidationErrors(errors)
  }, [name, address, city, state, price, imageURL1, imageURL2, imageURL3, imageURL4, imageURL5]);

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
      imageURL1,
      imageURL2,
      imageURL3,
      imageURL4,
      imageURL5,
    }

    let spot = await dispatch(createUpdate(court))
    if (spot) {
      history.push(`/spots/${spot.id}`)
    }
  }

  return (
    <form className="updateListing" onSubmit={handleSubmit}>
      <label>Update Your Court</label>
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
        placeholder="Court Name"
        type="text"
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <input
        placeholder="Court Name"
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
        type="number"
        name="lat"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        required
      />

      <input
        placeholder="Longitude"
        type="number"
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