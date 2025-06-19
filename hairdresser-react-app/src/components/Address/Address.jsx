import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import style from "./Address.module.css";

const containerStyle = {
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto",
  backgroundColor: "#e7dbe5",
  height: "400px",
};

const center = {
  lat: 49.867912,
  lng: 21.410735,
};

const Address = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Tutaj jestem :)</h1>
      <LoadScript googleMapsApiKey="AIzaSyAcLcJJDPho2VfZb70v3kuTwOqs3HOLxM4">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Address;
