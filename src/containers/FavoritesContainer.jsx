import { useSelector } from "react-redux";
import Favorites from "../components/Favorites";

const FavoritesContainer = () => {
  const { user } = useSelector((state) => state.user);
  return <Favorites user={user} />;
};

export default FavoritesContainer;
