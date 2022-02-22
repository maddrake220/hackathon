import styled from "styled-components";
import { GetJobDataFetcher } from "../hooks/DataFetcher";
import SearchInput from "./SearchInput";
import JobCard from "./JobCard";

const JobList = () => {
  const [data] = GetJobDataFetcher();
  console.log(data);
  return (
    <StyledJobList>
      <div className="search-input">
        <SearchInput autoFocus={true} />
        <div style={{ marginTop: "120px" }}></div>
        <div>
          {data?.map((v) => (
            <JobCard
              data={v}
              id={v.ENTRPS_NM + v.OPERT_INST_NM}
              sigun={v.SIGUN_NM._text}
              name={v.ENTRPS_NM._text}
              opert={v.OPERT_INST_NM._text}
              wageinfo={v.WAGE_INFO._text}
              recurt={v.RECRUT_PSNNUM._text}
              startdate={v.BEGIN_DE._text}
              enddate={v.END_DE._text}
            />
          ))}
        </div>
      </div>
    </StyledJobList>
  );
};
/**
 * 
BEGIN_DE: {_text: '2016-04-21'}
BIZ_YY: {_text: '2016'}
END_DE: {_text: '2016-04-26'}
ENTRPS_NM: {_text: '성심실버요양원 2호점 1'}
JOB_TYPE: {_text: '인턴형'}
OPERT_INST_NM: {_text: '남양주시니어클럽'}
RECRUT_PSNNUM: {_text: '1'}
SIDO_NM: {_text: '경기'}
SIGUN_CD: {_text: '41360'}
SIGUN_NM: {_text: '남양주시'}
STATE_DIV_NM: {_text: '완료'}
WAGE_INFO: {_text: '기관문의'}

 */
export default JobList;

const StyledJobList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .search-input {
    position: absolute;
    left: 7px;
    top: -115px;
  }
`;
