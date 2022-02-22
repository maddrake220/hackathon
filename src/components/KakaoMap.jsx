import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMap = ({ location, text, width = "100%", height = "332px" }) => {
  if (location === undefined) return null;
  return (
    <Map
      center={{ lat: location.latitude, lng: location.longitude }}
      style={{ width, height }}
    >
      <MapMarker position={{ lat: location.latitude, lng: location.longitude }}>
        <div style={{ color: "#000" }}>{text}</div>
      </MapMarker>
    </Map>
  );
};

export default KakaoMap;
