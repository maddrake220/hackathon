import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainSvg from "./MainSvg";

const StyledJob = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .title-text {
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    font-style: normal;
    font-weight: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
  .search-input {
    position: absolute;
    top: 119px;
    left: 10px;
  }
`;

const Main = ({ data }) => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate("/list");
  }, [navigate]);
  return (
    <StyledJob>
      <MainSvg />
      <div className="title-text">
        <div>빠르고 간편하게</div>
        <div>어르신 지역 일자리에 지원해보세요</div>
      </div>
      <div style={{ marginTop: "10px" }}></div>
      <div className="search-input" onClick={onClick}>
        {/* <SearchInput data={data} /> */}
      </div>
    </StyledJob>
  );
};

export default Main;
