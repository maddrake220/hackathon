import { useSelector } from "react-redux";
import JobFavorites from "../components/JobFavorites";

const FavoritesContainer = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return <JobFavorites user={user} />;
};

export default FavoritesContainer;
