import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const key = "AIzaSyAN9l2O7vcvjBU_rE2L9jiyRBnrnv420IM"

  const mapStyles = {
    height: "50vh",
    width: "50%",
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
      options={options} 
      />
    </LoadScript>
  )
}

export default MapContainer;