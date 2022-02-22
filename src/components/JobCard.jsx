import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserFavorite, unSetUserFavorite } from "../redux/reducers/user";
import _ from "lodash";
import styled from "styled-components";
import CustomButton from "./CustomButton4";
const Card = ({
  data,
  id,
  sigun,
  name,
  opert,
  wageinfo,
  recurt,
  startdate,
  enddate,
}) => {
  const dispatch = useDispatch();
  const {
    user: { favorites },
  } = useSelector((state) => state.user);
  const [like, setLike] = useState(false);
  useEffect(() => {
    const find = _.findIndex(favorites, function (o) {
      console.log("id?", o);
      return o.id === id;
    });
    if (find === -1) {
      setLike(false);
    } else {
      setLike(true);
    }
  }, [favorites, id]);
  const onClick = useCallback(() => {
    !like
      ? dispatch(setUserFavorite({ id, data }))
      : dispatch(unSetUserFavorite({ id, data }));
  }, [dispatch, id, data, like]);
  return (
    <StyledCard>
      <div className="inner-card">
        <div
          className={`startdate ${
            startdate.slice(8, 10) % 2 === 1 ? "go" : "end"
          }`}
        ></div>
        <div className="sigun">{sigun}</div>
        <div className="name">{name}</div>
        <div className="opert">{opert}</div>
        <div className="wageinfo">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 12C18.76 12 21 9.76 21 7C21 4.24 18.76 2 16 2C13.24 2 11 4.24 11 7C11 9.76 13.24 12 16 12ZM21.45 17.6C21.06 17.2 20.57 17 20 17H13L10.92 16.27L11.25 15.33L13 16H15.8C16.15 16 16.43 15.86 16.66 15.63C16.89 15.4 17 15.12 17 14.81C17 14.27 16.74 13.9 16.22 13.69L8.95001 11H7.00001V20L14 22L22.03 19C22.04 18.47 21.84 18 21.45 17.6ZM5.00001 11H0.984009V22H5.00001V11Z"
              fill="#339A09"
            />
          </svg>
          <span>
            {wageinfo === "기관문의" ? "임금은 기관에 문의해주세요" : wageinfo}
          </span>
        </div>
        <div className="recurt">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12C13.1935 12 14.3381 11.5259 15.182 10.682C16.0259 9.83807 16.5 8.69347 16.5 7.5C16.5 6.30653 16.0259 5.16193 15.182 4.31802C14.3381 3.47411 13.1935 3 12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5C7.5 8.69347 7.97411 9.83807 8.81802 10.682C9.66193 11.5259 10.8065 12 12 12ZM21 19.5C21 21 19.5 21 19.5 21H4.5C4.5 21 3 21 3 19.5C3 18 4.5 13.5 12 13.5C19.5 13.5 21 18 21 19.5Z"
              fill="#356EE7"
            />
          </svg>
          <span>{recurt}명</span>모집중이에요
        </div>
        <div className="enddate">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.625 18.625C0.625 19.0398 0.960156 19.375 1.375 19.375H18.625C19.0398 19.375 19.375 19.0398 19.375 18.625V8.78125H0.625V18.625ZM18.625 2.3125H14.6875V0.8125C14.6875 0.709375 14.6031 0.625 14.5 0.625H13.1875C13.0844 0.625 13 0.709375 13 0.8125V2.3125H7V0.8125C7 0.709375 6.91563 0.625 6.8125 0.625H5.5C5.39687 0.625 5.3125 0.709375 5.3125 0.8125V2.3125H1.375C0.960156 2.3125 0.625 2.64766 0.625 3.0625V7.1875H19.375V3.0625C19.375 2.64766 19.0398 2.3125 18.625 2.3125Z"
              fill="#FF5555"
            />
          </svg>
          <div>
            {" "}
            {startdate.slice(8, 10) % 2 === 1 ? (
              <span>
                <span>24일</span> 신청이 마감돼요
              </span>
            ) : (
              "신청이 마감했어요"
            )}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "43px", position: "relative" }}>
        <svg
          className="star"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2836 7.27578L13.3328 6.41093L10.6726 1.01797C10.6 0.870309 10.4805 0.750778 10.3328 0.678121C9.96248 0.495309 9.51248 0.647653 9.32733 1.01797L6.66717 6.41093L0.716389 7.27578C0.552327 7.29922 0.402327 7.37656 0.287483 7.49375C0.148643 7.63645 0.0721362 7.82843 0.074773 8.02752C0.0774098 8.2266 0.158975 8.41649 0.301545 8.55547L4.60701 12.7531L3.58983 18.6805C3.56597 18.8183 3.58123 18.9602 3.63387 19.0898C3.68651 19.2195 3.77442 19.3318 3.88764 19.414C4.00086 19.4962 4.13486 19.5451 4.27444 19.555C4.41401 19.565 4.55358 19.5356 4.67733 19.4703L9.99998 16.6719L15.3226 19.4703C15.468 19.5477 15.6367 19.5734 15.7984 19.5453C16.2062 19.475 16.4805 19.0883 16.4101 18.6805L15.393 12.7531L19.6984 8.55547C19.8156 8.44062 19.893 8.29062 19.9164 8.12656C19.9797 7.7164 19.6937 7.33672 19.2836 7.27578Z"
            fill="#356EE7"
          />
        </svg>
        <CustomButton primary text={"관심 일자리 등록하기"} />
        <CustomButton
          text={
            startdate.slice(8, 10) % 2 === 1 ? "신청하기" : "마감된 일자리에요"
          }
          style={{
            backgroundColor: startdate.slice(8, 10) % 2 === 0 && "#838383",
          }}
        />
      </div>

      <div>신청하기</div>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  overflow: hidden;
  width: 320px;
  height: 394px;
  font-size: 20px;
  margin-top: 16px;
  background: #ffffff;
  border: 1px solid #c5c5c5;
  box-sizing: border-box;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  color: #666666;
  .star {
    position: absolute;
    left: 47px;
    top: 14px;
    bottom: 0;
  }
  .inner-card {
    margin-left: 16px;
  }
  .startdate {
    margin-top: 16px;
    width: 98px;
    height: 40px;
    background: #ff5555;
    border-radius: 100px;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    &.go {
      ::before {
        content: "접수 진행중";
      }
    }
    &.end {
      background-color: #979696;
      ::before {
        content: "마감";
      }
    }
  }
  .sigun {
    margin-top: 12px;
    color: #333333;
    font-size: 20px;
    line-height: 30px;
  }
  .name {
    margin-top: 4px;
    color: #333333;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
  }
  .opert {
    margin-top: 4px;
    color: #333333;
    font-weight: bold;
  }
  .wageinfo {
    margin-top: 8px;
    display: flex;
    align-items: center;
    > span {
      margin-left: 4px;
    }
  }
  .recurt {
    margin-top: 8px;
    display: flex;
    align-items: center;
    > span {
      margin-left: 4px;
      font-weight: bold;
      color: #356ee7;
    }
  }
  .enddate {
    margin-top: 8px;
    display: flex;
    align-items: center;

    div {
      margin-left: 6px;
      > span {
        > span {
          font-weight: bold;
          color: #ff5555;
        }
      }
    }
  }
`;
