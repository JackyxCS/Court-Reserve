import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { searchSpots } from '../../store/search';

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState('')
  const [validationErrors, setValidationErrors] = useState([])

  useEffect(() => {
    const errors = [];
    if (search.length === 0) errors.push("Must enter a search input")
    setValidationErrors(errors)
  }, [search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      search
    }

    if (validationErrors.length > 0) {
      return;
    }

    let foundCourts = await dispatch(searchSpots(search))
    if (foundCourts.length > 0) {
      history.push({ pathname: `/spots/search`, state: { search: payload.search } })
    } else {
      alert('No locations found')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Try 'Houston' or 'Cypress'"
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
      // disabled={validationErrors.length > 0}
      >
        Search
      </button>
    </form>


  );
}

export default SearchBar