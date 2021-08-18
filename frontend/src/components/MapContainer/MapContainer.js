import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

  const mapStyles = {
    height: "1000px",
    width: "1000px",
  };

  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }

  const options = {
    disableDefaultUI: true,
    zoonControl: true
  }

  return (
    <LoadScript
      googleMapsApiKey={key}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={8}
        center={defaultCenter}
        options={options}>
      </GoogleMap>
    </LoadScript>
  )
}

export default MapContainer;