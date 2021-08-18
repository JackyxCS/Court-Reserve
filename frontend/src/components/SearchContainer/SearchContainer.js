// import hooks from 'react'
import { useEffect } from 'react';
// import hooks from 'react-redux
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import the thunk creator
import { searchSpots } from '../../store/search';
import { useLocation } from 'react-router';
import MapContainer from '../Maps/index';

// import styles from './SpotsContainer.module.css'

const SearchContainer = () => {
  // declare variables from hooks
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state.search));
  const location = useLocation();

  // use a 'react' hook and cause a side effect
  useEffect(() => {
    dispatch(searchSpots((location.state.search)))
  }, [dispatch, location]);

  return (
    <div>
      <div>
        {!!spots.length && spots.map((spot) =>
          <NavLink key={spot.id} to={`/spots/${spot.id}`}>
            <div><img src={spot?.Images[0].url} alt='' />{spot?.name}</div>
          </NavLink>
        )}
      </div>
      <div><MapContainer /></div>
    </div>
  )
}

export default SearchContainer;