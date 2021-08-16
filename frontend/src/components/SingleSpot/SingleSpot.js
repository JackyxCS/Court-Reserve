// import hooks from 'react'
import { useEffect } from 'react';
// import hooks from 'react-redux
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import the thunk creator
import { fetchSpots } from '../../store/spots';

// import styles from './SingleSpot.module.css'

const SingleSpot = () => {
  // declare variables from hooks
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const spots = useSelector(state => Object.values(state.spots))
  const singleSpot = spots.filter(spot => Number(spot.id) === Number(spotId))

  // use a 'react' hook and cause a side effect
  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);

  return (
    <div>
      {singleSpot[0].name}
    </div>
  )
}

export default SingleSpot;