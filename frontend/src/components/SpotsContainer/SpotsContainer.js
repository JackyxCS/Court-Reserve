// import hooks from 'react'
import { useEffect } from 'react';
// import hooks from 'react-redux
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import the thunk creator
import { fetchSpots } from '../../store/spots';

import styles from './SpotsContainer.module.css'

const SpotsContainer = () => {
  // declare variables from hooks
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state.spots));

  // use a 'react' hook and cause a side effect
  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);

  return (
    <div className={styles.spotContainer}>
      {!!spots.length && spots.map((spot) =>
        <div key={spot.id} className={styles.spotCard}>
          <NavLink className={styles.aCard} key={spot.id} to={`/spots/${spot.id}`}>
            <img className={styles.imageCard} src={spot?.Images[0].url} alt='' />
            {/* <div> */}
              <div className={styles.nameDiv1}>{spot?.name}</div>
              <div className={styles.nameDiv2}>{spot?.city}, {spot?.state}</div>
            {/* </div> */}
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default SpotsContainer;