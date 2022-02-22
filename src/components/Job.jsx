import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CardButton from "./CardButton";
import SearchInput from "./SearchInput";
// import MainSvg from "./MainSvg";
// import SearchInput from "./SearchInput";
const Job = ({ loading, error, data }) => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate("/list");
  }, [navigate]);
  const onClickHappy = useCallback(() => {
    navigate("/applyinquiry");
  }, [navigate]);
  return (
    <StyledJob>
      <div className="job-wrap">
        <div className="search-input" onClick={onClick}>
          <SearchInput />
        </div>
        <div className="cards">
          <CardButton
            onClick={onClickHappy}
            backgroundColor={"#248FE5"}
            text={"나의 행복일자리 신청내역"}
          />
          <CardButton
            backgroundColor={"#FE9428"}
            text={"내가 관심있어 한 일자리"}
          />
        </div>
      </div>
      {/* {data?.map((v, index) => {
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
      })} */}
    </StyledJob>
  );
};
export default Job;

const StyledJob = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .search-input {
    position: absolute;
    top: -115px;
  }
  .job-wrap {
    position: relative;
  }
  .title-text {
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    font-style: normal;
    font-weight: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
  }
  .cards {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    div {
      margin: 7px;
    }
  }
`;
