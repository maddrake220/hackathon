import { useCallback } from "react";
import _ from "lodash";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PhoneSvg from "./PhoneSvg";
import AddressSvg from "./AddressSvg";
import HomeSvg from "./HomeSvg";

const Card = ({
  data,
  faxno,
  grp,
  address,
  telno,
  name,
  id,
  latitude,
  longitude,
}) => {
  const navigate = useNavigate();

  const onClickDetail = useCallback(() => {
    navigate(`/detail/${id}`, { replace: true, state: data });
  }, [navigate, id, data]);
  return (
    <StyledCard>
      <div className="card-inner">
        <h3>{name}</h3>

        <div className="infor">
          <div className="telno">
            <PhoneSvg />
            <span>{telno}</span>
          </div>

          <div className="grp">
            <HomeSvg />
            <span>{grp}</span>
          </div>
          <div className="address">
            <AddressSvg />
            <span>{address}</span>
          </div>
        </div>
      </div>
      <div className="button-detail" onClick={onClickDetail}>
        <span>상세보기</span>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 320px;
  height: 292px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  font-family: "Roboto";
  font-style: normal;
  letter-spacing: -0.01em;
  position: relative;
  display: flex;
  flex-direction: column;
  .card-inner {
    margin-left: 20px;
    margin-right: 20px;
  }
  h3 {
    display: block;
    margin-top: 26px;
    font-weight: bold;
    color: #ee4353;
    font-size: 32px;
    line-height: 37px;
  }
  .receipts {
    margin-top: 3px;
    > div {
      width: 36.93px;
      height: 18.12px;
      left: 41.99px;
      top: 922.86px;
      background: #ee4353;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .infor {
    margin-top: 33px;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    * {
      display: flex;
      align-items: center;
      margin-top: 4px;
      > span {
        margin-left: 12px;
      }
    }
  }
  .button-detail {
    position: absolute;
    bottom: 0;
    background: #ee4353;
    width: 100%;
    height: 46px;
    border-radius: 0 0 20px 20px;
    display: flex;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: white;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
export default Card;
