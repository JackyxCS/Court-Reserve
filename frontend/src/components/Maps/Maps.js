import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
// import { useDispatch, useSelector } from 'react-redux';
// import { searchSpots } from '../../store/search';
// import { useLocation } from 'react-router';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

const Maps = ({ apiKey, spots }) => { //how about passing spots here
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const [markersArr, setMarkersArr] = useState([])
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)

  useEffect(() => {
    const newArray = []
    if (spots?.length) {
      setLat(+spots[0]?.lat)
      setLng(+spots[0]?.lng)
      spots?.forEach(spot => {
        const obj = {}
        obj['name'] = spot?.name
        obj['lat'] = spot?.lat
        obj['lng'] = spot?.lng
        newArray.push(obj)
      })
      setMarkersArr(newArray)
    } else {
      setLat(0)
      setLng(0)
    }
  }, [spots])

  // console.log(markersArr)

  // const newLatArray = spots?.map(spot => +spot?.lat)
  // const newLngArray = spots?.map(spot => +spot?.lng)
  // const newLat = newLatArray?.reduce((a, b) => a + b, 0) / newLatArray?.length
  // const newLng = newLngArray?.reduce((a, b) => a + b, 0) / newLngArray?.length

  // const newLat = +spots[0]?.lat
  // const newLng = +spots[0]?.lng
  // center.lat = +newLat;
  // center.lng = +newLng;

  // const markersArr = []
  // if (!spots?.length) {
  //   center.lat = 0;
  //   center.lng = 0;
  // } else {
  //   spots?.forEach(spot => {
  //     const obj = {}
  //     obj['name'] = spot?.name
  //     obj['lat'] = spot?.lat
  //     obj['lng'] = spot?.lng
  //     markersArr.push(obj)
  //   })
  // }

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat, lng }}
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