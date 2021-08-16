// import hooks from 'react'
import { useEffect } from 'react';
// import hooks from 'react-redux
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import the thunk creator
import { fetchSpot } from '../../store/spots';

// import styles from './SingleSpot.module.css'

const SingleSpot = () => {
  // declare variables from hooks
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const spot = useSelector(state => state.spots[spotId])

  // use a 'react' hook and cause a side effect
  useEffect(() => {
    dispatch(fetchSpot(spotId));
  }, [dispatch, spotId]);

  return (
    <div>
      {spot.name}
    </div>
  )
}

export default SingleSpot;