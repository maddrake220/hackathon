import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMap = ({ location, text }) => {
  if (location === undefined) return null;
  return (
    <Map
      center={{ lat: location.latitude, lng: location.longitude }}
      style={{ width: "100%", height: "160px" }}
    >
      <MapMarker position={{ lat: location.latitude, lng: location.longitude }}>
        <div style={{ color: "#000" }}>{text}</div>
      </MapMarker>
    </Map>
  );
};

export default KakaoMap;
