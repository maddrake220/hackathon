import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CardButton from "./CardButton";
import SearchInput from "./SearchInput2";

const Center = () => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate("center/list");
  }, [navigate]);
  const onClickFind = useCallback(() => {
    navigate("center/list");
  }, [navigate]);
  const onClickSort = useCallback(() => {
    navigate("center/favorites");
  }, [navigate]);

  return (
    <StyledCenter>
      <div style={{ marginTop: "10px" }}></div>

      <div className="search-input" onClick={onClick}>
        <SearchInput />
      </div>
      <div className="cards">
        <CardButton
          onClick={onClickFind}
          backgroundColor={"#EF6500"}
          text={"동네 복지관 찾기"}
        />
        <CardButton
          onClick={onClickSort}
          backgroundColor={"#707070"}
          text={"나의 회원등록내역 조회"}
        />
      </div>
    </StyledCenter>
  );
};

export default Center;

const StyledCenter = styled.div`
  .cards {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    div {
      margin: 7px;
    }
  }
  .search-input {
    position: absolute;
    top: 264px;
    left: 12px;
  }
`;
