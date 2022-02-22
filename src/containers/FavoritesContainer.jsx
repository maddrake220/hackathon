import { useSelector } from "react-redux";
import CenterFavorites from "../components/CenterFavorites";

const FavoritesContainer = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return <CenterFavorites user={user} />;
};

export default FavoritesContainer;
