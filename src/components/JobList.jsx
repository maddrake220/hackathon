import styled from "styled-components";
import { GetJobDataFetcher } from "../hooks/DataFetcher";
import SearchInput from "./SearchInput";
import JobCard from "./JobCard";
import { useCallback, useState } from "react";

const JobList = () => {
  const [data] = GetJobDataFetcher();
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState("");
  const onClick = useCallback(() => {
    setSearched(search);
  }, [search]);
  const onKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        setSearched(search);
      }
    },
    [search]
  );

  console.log(data);
  return (
    <StyledJobList>
      <div className="search-input">
        <SearchInput
          search={search}
          setSearch={setSearch}
          autoFocus={true}
          onClick={onClick}
          onKeyPress={onKeyPress}
        />
        <div style={{ marginTop: "120px" }}></div>
        <div className="job-list">
          {searched !== ""
            ? data
                .filter((v) => v.SIGUN_NM._text.includes(searched))
                .map((v) => {
                  console.log(v);
                  return (
                    <JobCard
                      data={v}
                      id={v.ENTRPS_NM._text + v.OPERT_INST_NM._text}
                      sigun={v.SIGUN_NM._text}
                      name={v.ENTRPS_NM._text}
                      opert={v.OPERT_INST_NM._text}
                      wageinfo={v.WAGE_INFO._text}
                      recurt={v.RECRUT_PSNNUM._text}
                      startdate={v.BEGIN_DE._text}
                      enddate={v.END_DE._text}
                    />
                  );
                })
            : data?.map((v) => (
                <JobCard
                  data={v}
                  id={v.ENTRPS_NM._text + v.OPERT_INST_NM._text}
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
  .job-list {
    margin-left: 10px;
  }
`;
