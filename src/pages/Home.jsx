import { useCallback, useReducer } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import KakaoMap from "../components/KakaoMap";
import Navigation from "../components/Navigation";
import { ThemeDispatch } from "../context/context";
import useCurrentLocation from "../hooks/Geolocation";
import { changeStyle } from "../reducer/actions";
import { reducer } from "../reducer/reducer";
import { getNewFontSize } from "../utils/utils";
import Favorites from "./Favorites";
import Job from "./Job";
import Main from "./Main";
import NotFound from "./NotFound";
import Welfare from "./Welfare";
const initialState = {
  fontSize: "16px",
};

const Home = () => {
  const { pathname } = useLocation();
  const [style, dispatch] = useReducer(reducer, initialState);
  const onClickPlus = useCallback(() => {
    const newFontSize = getNewFontSize(style.fontSize, "plus", 1);
    dispatch(
      changeStyle({
        fontSize: newFontSize,
      })
    );
  }, [style]);
  const onClickMinus = useCallback(() => {
    const newFontSize = getNewFontSize(style.fontSize, "minus", 1);
    dispatch(
      changeStyle({
        fontSize: newFontSize,
      })
    );
  }, [style]);
  return (
    <ThemeDispatch.Provider value={dispatch}>
      <Layout style={style}>
        <header>
          <button onClick={onClickPlus}>+</button>
          <button onClick={onClickMinus}>-</button>
          <Navigation />
        </header>
        <main>
          {pathname === "/" ? (
            <Main />
          ) : pathname === "/job" ? (
            <Job />
          ) : pathname === "/welfare" ? (
            <Welfare />
          ) : pathname === "/favorites" ? (
            <Favorites />
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
  width: 100vw;

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
