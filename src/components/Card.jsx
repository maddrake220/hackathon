import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserFavorite, unSetUserFavorite } from "../redux/reducers/user";
import _ from "lodash";
import styled from "styled-components";

const Card = ({ data, telno, name, id }) => {
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
    <StyledCard
      style={{ width: "300px", height: "200px", border: "1px solid black" }}
    >
      <h3>{name}</h3>
      <p>{telno}</p>
      <button
        onClick={onClick}
        style={{ backgroundColor: like ? "red" : "transparent" }}
      >
        좋아요
      </button>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div``;
