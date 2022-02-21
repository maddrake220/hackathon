import KakaoMap from "../components/KakaoMap";
import useCurrentLocation from "../hooks/Geolocation";

const Job = () => {
  const { location, error } = useCurrentLocation();
  return (
    <div>
      <KakaoMap location={location} />
    </div>
  );
};

export default Job;
