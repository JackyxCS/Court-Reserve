import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { searchSpots } from '../../store/search';
import styles from './SearchBar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
    <div className={styles.searchbar}>
      <form className={styles.searchform} onSubmit={handleSubmit}>
        <input
          className={styles.searchinput}
          placeholder="Try 'Houston' or 'Cypress'"
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className={styles.searchbutton}
          type="submit"
        // disabled={validationErrors.length > 0}
        >
          {/* <i className="i.fa.fa-search.fa-lg"></i> */}
          <FontAwesomeIcon icon={faSearch}
            style={{ transform: [{ rotateX: '180deg' }] }} />
          {/* Search */}
        </button>
      </form>
    </div>
  );
}

export default SearchBar