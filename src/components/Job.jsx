import styled from "styled-components";
import Card from "./Card";
import CardButton from "./CardButton";
import SearchInput from "./SearchInput";
const Job = ({ loading, error, data }) => {
  return (
    <StyledJob>
      <div style={{ marginTop: "10px" }}></div>
      <SearchInput />
      <div className="cards">
        <CardButton backgroundColor={"#248FE5"} />
        <CardButton backgroundColor={"#EE4353"} />
        <CardButton backgroundColor={"#FE9428"} />
        <CardButton backgroundColor={"#7144E2"} />
      </div>
      {data?.GGSOCIALELDJOBSTM?.row?.map((v, index) => {
        return (
          <Card
            data={v}
            key={v.FAXNO._text}
            id={v.FAXNO._text}
            title={v.INST_DIV._text}
            text={v.INST_NM._text}
            latitude={v.REFINE_WGS84_LAT._text}
            longitude={v.REFINE_WGS84_LOGT._text}
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
