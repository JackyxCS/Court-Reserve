// import hooks from 'react'
import { useEffect } from 'react';
// import hooks from 'react-redux
import { useDispatch, useSelector } from 'react-redux';
// import the thunk creator
import { fetchSpots } from '../../store/spots';

// import styles from './SpotsContainer.module.css'

const SpotsContainer = () => {
  // declare variables from hooks
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state.spots));

  // use a 'react' hook and cause a side effect
  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);

  return (
    <div>
      {spots.map((spot) =>
        <div key={spot.id}><img src={spot.Images[0].url} alt='' />{spot.name}</div>
      )}
    </div>
  )
}

export default SpotsContainer;