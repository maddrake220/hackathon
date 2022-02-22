import styled from "styled-components";
import JobCard from "./JobCard";

const Favorites = ({ user }) => {
  console.log(user);
  return (
    <StyledFavorites>
      <div className="back">
        <span>내가 관심있어 한 일자리</span>
      </div>
      <div className="favorites">
        {user?.jobfavorites?.map((v) => {
          console.log(v);
          return (
            <JobCard
              data={v}
              id={v.id}
              sigun={v.data.SIGUN_NM._text}
              name={v.data.ENTRPS_NM._text}
              opert={v.data.OPERT_INST_NM._text}
              wageinfo={v.data.WAGE_INFO._text}
              recurt={v.data.RECRUT_PSNNUM._text}
              startdate={v.data.BEGIN_DE._text}
              enddate={v.data.END_DE._text}
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
    background: #fe9428;
    display: flex;
    align-items: center;
    justify-content: center;
    > span {
      width: 240px;
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
