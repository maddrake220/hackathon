import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMap = ({ location }) => {
  if (location === undefined) return null;
  return (
    <Map
      center={{ lat: location.latitude, lng: location.longitude }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: location.latitude, lng: location.longitude }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
};

export default KakaoMap;
