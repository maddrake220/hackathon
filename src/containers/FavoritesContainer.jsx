import { useSelector } from "react-redux";
import CenterFavorites from "../components/CenterFavorites";

const FavoritesContainer = () => {
  const { user } = useSelector((state) => state.user);
  return <CenterFavorites user={user} />;
};

export default FavoritesContainer;
