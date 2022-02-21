import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">main</NavLink>
      <NavLink to="/favorites">favorites</NavLink>
    </div>
  );
};

export default Navigation;
