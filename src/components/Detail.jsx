import { useLocation } from "react-router-dom";
import styled from "styled-components";
import FaxSvg from "./FaxSvg";
import HomeSvg from "./HomeSvg";
import PersonSvg from "./PersonSvg";
import KakaoMap from "./KakaoMap";
import AddressSvg from "./AddressSvg";

const Detail = () => {
  const { state } = useLocation();
  console.log(state);
  const location = {
    latitude: state.REFINE_WGS84_LAT._text,
    longitude: state.REFINE_WGS84_LOGT._text,
  };
  return (
    <StyledDetailCenter>
      <div className="back">
        <span>집근처 복지관</span>
      </div>
      <div className="detail">
        <h3>{state.FACLT_NM._text}</h3>
        <div className="detail-info">
          <div>
            <FaxSvg />
            <span>{state.DETAIL_FAXNO._text}</span>
          </div>
          <div>
            <FaxSvg />
            <span>{state.DETAIL_TELNO._text}</span>
          </div>
          <div>
            <HomeSvg />
            <span>{state.COPRTN_GRP_NM._text}</span>
          </div>
          <div>
            <PersonSvg />
            <span>{state.ENFLPSN_PSN_CAPA._text}명</span>
          </div>
        </div>
        <div className="buttons">
          <div className="button1">
            <span>상세보기</span>
          </div>
          <div className="button2">
            <span>전화하기</span>
          </div>
        </div>
        <div style={{ marginTop: "29px" }}></div>
        <KakaoMap
          location={location}
          text={state.FACLT_NM._text}
          width="320px"
        />
        <div className="address-info">
          <div className="address-x">
            <AddressSvg />
            <span>주소</span>
            <span className="zip-code">{state.REFINE_ZIP_CD._text}</span>
          </div>
          <div className="addresses">
            <div>
              <span>{state.REFINE_LOTNO_ADDR._text}</span>
            </div>
            <div>
              <span>{state.REFINE_ROADNM_ADDR._text}</span>
            </div>
          </div>
        </div>
      </div>
    </StyledDetailCenter>
  );
};

export default Detail;

const StyledDetailCenter = styled.div`
  .back {
    width: 360px;
    height: 167px;
    background: #248fe5;
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
  .detail {
    font-family: "Roboto";
    font-style: normal;
    letter-spacing: -0.01em;

    z-index: 1;
    transform: translateY(-20px);
    width: 360px;
    background-color: white;
    box-shadow: inset 0px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > h3 {
      font-weight: bold;
      margin-top: 62px;
      font-size: 35px;
      line-height: 41px;
    }
    .detail-info {
      font-weight: 300;
      font-size: 16px;
      line-height: 19px;
      margin-top: 47px;
      transform: translateX(-62px);
      > * {
        margin-top: 6px;
        display: flex;
        align-items: center;
        > span {
          margin-left: 12px;
        }
      }
    }
    .buttons {
      margin-top: 53px;
      display: flex;
      cursor: pointer;
      .button1 {
        width: 161px;
        height: 64px;
        background-color: white;
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .button2 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        width: 161px;
        height: 64px;
        background-color: #248fe5;
        border: 1px solid #248fe5;
      }
    }
    .address-info {
      transform: translateX(-23px);
      margin-top: 46px;
      padding-bottom: 109px;
      position: relative;

      font-weight: bold;
      font-size: 20px;
      line-height: 29px;
      .zip-code {
        position: absolute;
        right: -42px;
      }
      .address-x {
        display: flex;
        align-items: center;
      }
      .addresses {
        margin-top: 20px;
        font-family: "Noto Sans KR";
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 23px;
      }
    }
  }
`;
