import React, { useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
import { searchSpots } from '../../store/search';
import { useLocation } from 'react-router';

const containerStyle = {
  width: '500px',
  height: '500px',
};

const center = {
  lat: 38.9072,
  lng: 77.0369,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

// const libraries = ["places"]

const Maps = ({ apiKey, spots }) => { //how about passing spots here
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
    // libraries,
  });

  // const dispatch = useDispatch();
  // const spots = useSelector(state => Object.values(state.search));
  // const location = useLocation();

  console.log(spots)

  // useEffect(() => {
  //   dispatch(searchSpots((location.state.search)))
  // }, [dispatch, location]);

  // const spots = useSelector(state => Object.values(state.search))

  const newLatArray = spots?.map(spot => +spot.lat)
  const newLngArray = spots?.map(spot => +spot.lng)
  const newLat = newLatArray?.reduce((a, b) => a + b) / newLatArray?.length
  const newLng = newLngArray?.reduce((a, b) => a + b) / newLngArray?.length
  center.lat = newLat;
  center.lng = newLng;
  console.log(newLatArray)
  console.log(newLat)

  console.log(spots)
  console.log(spots[0].name)

  const markersArr = []
  spots.forEach(spot => {
    const obj = {}
    obj['name'] = spot.name
    obj['lat'] = spot.lat
    obj['lng'] = spot.lng
    markersArr.push(obj)
  })
  console.log(markersArr)

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={options}
        >
          {markersArr.map(marker => <Marker
            key={marker.name}
            position={{ lat: +marker.lat, lng: +marker.lng }}>
          </Marker>
          )}
        </GoogleMap>
      )}
    </>
  );
};

export default React.memo(Maps);