import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavLink to="/">
        {({ isActive }) => (
          <div className={`navi ${isActive && "active"}`}>
            <span>일자리 찾기</span>
          </div>
        )}
      </NavLink>
      <NavLink to="/center">
        {({ isActive }) => (
          <div className={`navi ${isActive && "active"}`}>
            <span>복지관 찾기</span>
          </div>
        )}
      </NavLink>
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled.div`
  width: 360px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: bold;
  .navi {
    width: 180px;
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active {
      color: #248fe5;
      font-size: 20px;
      line-height: 0px;
      border-bottom: 4px solid #248fe5;
    }
  }
`;
