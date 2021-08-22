// import hooks from 'react'
import { useEffect } from 'react';
// import hooks from 'react-redux
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import the thunk creator
import { fetchSpots } from '../../store/spots';
import BookingForm from '../BookingForm';
import SpotReviews from '../SpotReviews';
import ReviewForm from '../ReviewForm';
import MapContainer from '../Maps';
// import Maps from '../Maps/Maps';
import styles from './SingleSpot.module.css'

const SingleSpot = () => {
  // declare variables from hooks
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const spots = useSelector(state => Object.values(state.spots))
  const sessionUser = useSelector(state => state.session.user);
  const singleSpot = spots.filter(spot => Number(spot.id) === Number(spotId))
  const price = singleSpot[0]?.price;

  // use a 'react' hook and cause a side effect
  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);

  return (
    <div className={styles.singleSpot}>
      <div className={styles.nameSpot}>
        <h2 className={styles.courtName}>{singleSpot[0] && singleSpot[0]?.name}</h2>
        <p>{singleSpot[0] && singleSpot[0]?.city}, {singleSpot[0] && singleSpot[0]?.state}</p>
      </div>
      <div className={styles.twoImageContainers}>
        <img className={styles.spotImage0} src={singleSpot[0]?.Images[0]?.url} alt='' />
        <div className={styles.gridImages}>
          <div>
            <img className={styles.spotImage1} src={singleSpot[0]?.Images[1]?.url} alt='' />
          </div>
          <div>
            <img className={styles.spotImage2} src={singleSpot[0]?.Images[2]?.url} alt='' />
          </div>
          <div>
            <img className={styles.spotImage3} src={singleSpot[0]?.Images[3]?.url} alt='' />
          </div>
          <div>
            <img className={styles.spotImage4} src={singleSpot[0]?.Images[4]?.url} alt='' />
          </div>
        </div>
      </div>
      <div className={styles.courtsAvailable}>Courts available for reservation</div>
      <div className={styles.midContainer}>
        <div>
          <div className={styles.reviewForm}>
            <SpotReviews spotId={spotId} />
          </div>
          <div className={styles.reviewForm}>
            {sessionUser ? <ReviewForm /> : ''}
          </div>
        </div>
        <div>
          <BookingForm price={price} />
        </div>
      </div>
      <div className={styles.singleSpotContainer}>
        <MapContainer spots={singleSpot} />
      </div>
    </div>
  )
}

export default SingleSpot;