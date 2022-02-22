import styled from "styled-components";
import CenterCard from "./CenterCard";

const Favorites = ({ user }) => {
  return (
    <StyledFavorites>
      <div className="back">
        <span>MY 복지관 목록</span>
      </div>
      <div className="favorites">
        {user?.favorites.map((v) => {
          return (
            <CenterCard
              style={{ backgroundColor: "#707070", color: "white" }}
              data={v.data}
              key={v.data.DETAIL_TELNO._text}
              id={v.data.DETAIL_TELNO._text}
              name={v.data.FACLT_NM._text}
              city={v.data.SIGUN_NM._text}
              person={v.data.ENFLPSN_PSTPSN_SUM._text}
            />
          );
        })}
      </div>
    </StyledFavorites>
  );
};

const StyledFavorites = styled.div`
  .back {
    width: 360px;
    height: 167px;
    background: #707070;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export default Favorites;
