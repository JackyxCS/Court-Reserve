// import hooks from 'react'
import { useEffect } from 'react';
// import hooks from 'react-redux
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import the thunk creator
import { searchSpots } from '../../store/search';
import { useLocation } from 'react-router';
import MapContainer from '../Maps/index';
import styles from './SearchContainer.module.css'

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
    <div className={styles.searchContainer}>
      <div className={styles.spotContainer}>
        <div className={styles.courtDiv}>Find your court and start playing!</div>
        {!!spots.length && spots.map((spot) =>
          <div key={spot.id} className={styles.spotCard}>
            <NavLink key={spot.id} className={styles.aCard} to={`/spots/${spot.id}`}>
              <img className={styles.imageCard} src={spot?.Images[0].url} alt='' />
              <div className={styles.nameDiv}>
                <div className={styles.nameDiv1}>{spot?.name}</div>
                <div className={styles.priceDiv}>${spot?.price} per hour</div>
                <div className={styles.nameDiv2}>{spot?.city}, {spot?.state}</div>
              </div>
            </NavLink>
          </div>
        )}
      </div>
      <div className={styles.mapsContainer}><MapContainer spots={spots} /></div>
    </div >
  )
}

export default SearchContainer;