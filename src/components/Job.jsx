import styled from "styled-components";
import Card from "./Card";
import CardButton from "./CardButton";
import MainSvg from "./MainSvg";
import SearchInput from "./SearchInput";
const Job = ({ loading, error, data }) => {
  return (
    <StyledJob>
      <div style={{ marginTop: "10px" }}></div>
      <MainSvg />

      <div className="title">
        <h2>행복한 시니어를 위한 20가지 조건</h2>
      </div>
      <div style={{ marginTop: "10px" }}></div>
      <SearchInput />
      <div className="cards">
        <CardButton backgroundColor={"#248FE5"} />
        <CardButton backgroundColor={"#EE4353"} />
        <CardButton backgroundColor={"#FE9428"} />
        <CardButton backgroundColor={"#7144E2"} />
      </div>
      {data?.map((v, index) => {
        return (
          <Card
            data={v}
            key={v.OPERT_INST_NM._text + v.ENTRPS_NM._text}
            id={v.OPERT_INST_NM._text + v.ENTRPS_NM._text}
            title={v.ENTRPS_NM._text}
            text={v.OPERT_INST_NM._text}
            // latitude={v.REFINE_WGS84_LAT._text}
            // longitude={v.REFINE_WGS84_LOGT._text}
          />
        );
      })}
    </StyledJob>
  );
};
export default Job;

const StyledJob = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .cards {
    margin-left: 12px;
    display: flex;
    flex-wrap: wrap;
    div {
      margin: 7px;
    }
  }
`;
