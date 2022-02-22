import styled from "styled-components";
import { GetJobDataFetcher } from "../hooks/DataFetcher";
import CustomButton from "./CustomButton";
import { useCallback } from "react";
import ConfirmPage from "./ConfirmPage";

const Favorites = ({ user }) => {
  console.log(user);
  const [data] = GetJobDataFetcher();
  console.log(data);
  const onClick = useCallback(() => {}, []);
  return (
    <StyledFavorites>
      <div className="back">
        <span>나의 관심 일자리</span>
      </div>
      <div className="favorites">
        <CustomButton primary onClick={onClick} text={"관심 일자리 등록하기"} />
      </div>
      <ConfirmPage />
    </StyledFavorites>
  );
};

const StyledFavorites = styled.div`
  .back {
    width: 360px;
    height: 167px;
    background: #ee4353;
    display: flex;
    align-items: center;
    justify-content: center;
    > span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: bold;
      font-size: 35px;
      line-height: 41px;
      color: white;
      transform: translateY(-15px);
    }
  }
  .favorites {
    font-family: "Roboto";
    font-style: normal;
    letter-spacing: -0.01em;

    z-index: 1;
    transform: translateY(-20px);
    width: 360px;
    height: 353px;
    background-color: white;
    box-shadow: inset 0px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export default Favorites;
