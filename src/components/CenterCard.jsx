import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CustomButton3 from "./CustomButton3";
import { useDispatch, useSelector } from "react-redux";
import { setUserFavorite, unSetUserFavorite } from "../redux/reducers/user";
import _ from "lodash";

const Card = ({ style, data, name, id, city, person }) => {
  const navigate = useNavigate();
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
  const onClickDetail = useCallback(() => {
    navigate(`/detail/${id}`, { replace: true, state: data });
  }, [navigate, id, data]);
  const onClickFavorite = useCallback(() => {
    !like
      ? dispatch(setUserFavorite({ id, data }))
      : dispatch(unSetUserFavorite({ id, data }));
  }, [dispatch, id, data, like]);
  return (
    <StyledCard>
      <div className="card-inner" onClick={onClickDetail}>
        <div className="center-title">{name}</div>
        <div className="center-info">
          <span>
            시군명:{city} / 회원수: {person}명
          </span>
        </div>
      </div>
      <CustomButton3
        primary
        text={"MY복지관 저장하기"}
        onClick={onClickFavorite}
        style={style}
        like={like}
      />
      <a
        href="http://gangnam.go.kr/office/nonhyunsenior/contents/nonhyunsenior_guide/1/view.do?mid=nonhyunsenior_guide"
        target={"_blank"}
        rel="noreferrer"
      >
        <CustomButton3 text={"회원 등록하기"} style={style} />
      </a>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 320px;
  height: 360px;
  background: #ffffff;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  border-radius: 12px 12px 0px 0px;
  font-style: normal;
  letter-spacing: -0.01em;
  .card-inner {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 264px;
    &:hover {
      transform: scale(1.1);
    }
  }
  .center-title {
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
  }
  .center-info {
  }
  h3 {
    display: block;
    margin-top: 26px;
    font-weight: bold;
    color: #ee4353;
    font-size: 32px;
    line-height: 37px;
  }
`;
export default Card;
