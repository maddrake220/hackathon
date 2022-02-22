import styled from "styled-components";
import JobItems from "./JobItems";

const StyleContainer = styled.div`
  margin-top: -10px;
  padding: 0 20px;
  background-color: #f3f3f3;
  color: #333;
  .job-result {
    font-size: 18px;
    font-weight: bold;
    padding: 16px 0;
    span {
      font-weight: normal;
      font-size: 16px;
      padding-left: 8px;
    }
  }
`;

export default function SearchResult() {
  return (
    <StyleContainer>
      <div className="job-result">
        경기도 남양주시 <span>일자리 4건</span>
      </div>
      <JobItems
        title={"성심실버요양원 2호점 1"}
        state={"접수 진행중"}
        recrut={true}
        resume={true}
      />
      <JobItems
        title={"홍유스파랜드"}
        state={"마감"}
        recrut={false}
        resume={false}
      />
      <JobItems
        title={"별사탕어린이집"}
        state={"마감"}
        recrut={false}
        resume={false}
      />
    </StyleContainer>
  );
}
