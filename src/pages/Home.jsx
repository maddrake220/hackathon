import { useReducer } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Android from "../components/Android";
import Navigation from "../components/Navigation";
import { ThemeDispatch } from "../context/context";
import { reducer } from "../reducer/reducer";
import Favorites from "./Favorites";
import Job from "./Job";
import NotFound from "./NotFound";
import Center from "./Center";
import Detail from "../components/Detail";
const initialState = {
  fontSize: "16px",
};

const Home = () => {
  const { pathname } = useLocation();
  const [style, dispatch] = useReducer(reducer, initialState);
  // const onClickPlus = useCallback(() => {
  //   const newFontSize = getNewFontSize(style.fontSize, "plus", 1);
  //   dispatch(
  //     changeStyle({
  //       fontSize: newFontSize,
  //     })
  //   );
  // }, [style]);
  // const onClickMinus = useCallback(() => {
  //   const newFontSize = getNewFontSize(style.fontSize, "minus", 1);
  //   dispatch(
  //     changeStyle({
  //       fontSize: newFontSize,
  //     })
  //   );
  // }, [style]);
  return (
    <ThemeDispatch.Provider value={dispatch}>
      <Layout style={style}>
        <Android />
        <div className="inner">
          <span>어르신행복일자리</span>
        </div>
        <header>
          {/* <button onClick={onClickPlus}>+</button>
          <button onClick={onClickMinus}>-</button> */}
          <Navigation />
        </header>

        <main>
          {pathname === "/" ? (
            <Job />
          ) : pathname === "/center" ? (
            <Center />
          ) : pathname === "/favorites" ? (
            <Favorites />
          ) : pathname.slice(0, 7) === "/detail" ? (
            <Detail />
          ) : (
            <NotFound />
          )}
        </main>
        <footer></footer>
      </Layout>
    </ThemeDispatch.Provider>
  );
};

const Layout = styled.section`
  max-width: 360px;
  font-style: normal;
  background-color: #fff;
  .inner {
    width: 360px;
    height: 52px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;
    }
  }
  .title {
    position: absolute;
    width: 137px;
    top: 180px;
    left: 36px;
    font-family: "Roboto";
    font-weight: bold;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;
  }
  @media screen and (max-width: 599px) {
    /* 모바일 세로 */
  }

  @media screen and (max-width: 899px) {
    /* 모바일 가로, 타블렛 세로 */
  }

  @media screen and (max-width: 1199px) {
    /* 타블렛 가로 */
  }
  @media screen and (max-width: 1799px) {
    /* 데스크탑 */
  }

  min-height: 100vh;
  position: relative;
`;
export default Home;
