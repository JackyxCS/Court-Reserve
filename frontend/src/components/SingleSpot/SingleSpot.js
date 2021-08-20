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
import styles from './SingleSpot.module.css'

const SingleSpot = () => {
  // declare variables from hooks
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const spots = useSelector(state => Object.values(state.spots))
  const sessionUser = useSelector(state => state.session.user);
  const singleSpot = spots.filter(spot => Number(spot.id) === Number(spotId))

  // use a 'react' hook and cause a side effect
  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);

  console.log(singleSpot)

  return (
    <div className={styles.singleSpot}>
      <div className={styles.nameSpot}>
        {singleSpot[0] && singleSpot[0]?.name}
      </div>
      <img className={styles.spotImage} src={singleSpot[0]?.Images[0]?.url} alt='' />
      <SpotReviews spotId={spotId} />
      {sessionUser ? <ReviewForm /> : ''}
      <BookingForm />
      <MapContainer spots={singleSpot} />
    </div>
  )
}

export default SingleSpot;