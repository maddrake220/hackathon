import { useCallback, useReducer } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { ThemeDispatch } from "../context/context";
import { changeStyle } from "../reducer/actions";
import { reducer } from "../reducer/reducer";
import Job from "./Job";
import Main from "./Main";
import NotFound from "./NotFound";
import Welfare from "./Welfare";
const initialState = {
  fontSize: "16px",
};

const getNewFontSize = (fontsize, fn, range) => {
  let newFontSize;
  if (fn === "plus") {
    newFontSize = Number(fontsize.slice(0, 2)) + range;
  } else {
    newFontSize = Number(fontsize.slice(0, 2)) - range;
  }
  newFontSize = newFontSize + "px";
  return newFontSize;
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
      <div style={style}>
        <Layout>TEST</Layout>
        <header>
          <button onClick={onClickPlus}>+</button>
          <button onClick={onClickMinus}>-</button>
        </header>
        <main>
          {pathname === "/" ? (
            <Main />
          ) : pathname === "/job" ? (
            <Job />
          ) : pathname === "/welfare" ? (
            <Welfare />
          ) : (
            <NotFound />
          )}
        </main>
        <footer></footer>
      </div>
    </ThemeDispatch.Provider>
  );
};

const Layout = styled.div`
  font-size: 16px;
`;
export default Home;
