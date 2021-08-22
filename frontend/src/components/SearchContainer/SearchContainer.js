// import hooks from 'react'
import { useEffect } from 'react';
// import hooks from 'react-redux
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import the thunk creator
import { searchSpots } from '../../store/search';
import { useLocation } from 'react-router';
import MapContainer from '../Maps/index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from './SearchContainer.module.css'

const SearchContainer = () => {
  // declare variables from hooks
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state.search));
  const location = useLocation();

  let arr = []

  const totalRating = () => {
    // let averageRating;
    for (let i = 0; i < spots.length; i++) {
      let obj = {};
      let spot = spots[i]
      let num = 0;
      for (let j = 0; j < spot.Reviews.length; j++) {
        num += spot.Reviews[j].rating
      }
      obj['id'] = spots[i].id
      obj['sum'] = num
      arr.push(obj)
      num = 0;
    }
    return;
  }

  totalRating();

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
                <div className={styles.infoDiv}>
                  <div className={styles.nameDiv1}>{spot?.name}</div>
                  <div className={styles.priceDiv}>${spot?.price} per hour</div>
                  <div className={styles.nameDiv2}>{spot?.city}, {spot?.state}</div>
                  {/* <div>{spot.Reviews.length}</div> */}
                </div>
                <div className={styles.ratingDiv}>
                  {/* <div className={styles.starDiv}> */}
                  <FontAwesomeIcon icon={faStar} size='1x' color='#FF385C' />
                  {/* </div>
                  <div className={styles.ratingtextDiv}> */}
                  {(!!spot.Reviews.length) ? ((((arr.filter(ele => ele.id === spot.id))[0].sum) / spot.Reviews.length).toFixed(2)) : '0'} ({spot.Reviews.length} Reviews)
                  {/* </div> */}
                </div>
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