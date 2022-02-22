import styled from "styled-components";
import DdaySvg from "./DdaySvg";
import FaqSvg from "./FaqSvg";
import FavoritesSvg from "./FavoritesSvg";
import RecrutSvg from "./RecrutSvg";

const StyleContainer = styled.div`
  padding-bottom: 24px;
  background-color: #f3f3f3;
  color: #333;
  div {
    padding: 8px 16px;
  }
  .job-item {
    padding: 24px 0 0;
    background-color: #fff;
    border-radius: 12px;
    border: 1px solid #c5c5c5;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    .job-state {
      padding: 10px;
      font-weight: bold;
      font-size: 16px;
      border-radius: 100px;
      display: inline-block;
      margin-left: 16px;
    }
    .active {
      background-color: #ff5555;
      color: #fff;
    }
    .job-sigun {
      margin-top: 10px;
      font-size: 20px;
    }
    .job-title {
      font-size: 24px;
      font-weight: bold;
    }
    .job-company {
      font-size: 20px;
      font-weight: bold;
    }
    .job-money {
      display: flex;
      align-items: center;
      font-size: 20px;
      span {
        margin-left: 8px;
      }
    }
    .job-recrut {
      display: flex;
      align-items: center;
      font-size: 20px;
      margin-left: 3px;
      span {
        color: #356ee7;
        font-weight: bold;
        margin-left: 8px;
        margin-right: 4px;
      }
    }
    .job-dday {
      display: flex;
      align-items: center;
      font-size: 20px;
      margin-left: 3px;
      span {
        color: #ff5555;
        font-weight: bold;
        margin-left: 5px;
        margin-right: 4px;
      }
    }
    .job-btns {
      font-size: 20px;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: normal;
      justify-content: center;
      align-items: center;
      padding: 0;
      border-top: 1px solid #c5c5c5;
      margin-top: 12px;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        width: 100%;
        height: 48px;
      }
      .job-btn-favorites {
        color: #356ee7;
        span {
          padding-left: 6px;
        }
      }
      .job-btn-resume {
        background-color: #356ee7;
        text-align: center;
        box-sizing: border-box;
        border-radius: 0 0 12px 12px;
        color: #fff;
      }
    }
  }
`;

export default function JobItems({ title, state, recrut, resume }) {
  return (
    <StyleContainer>
      <div className="job-item">
        {state === "마감" ? (
          <span
            style={{
              backgroundColor: "#979696",
              color: "#fff",
              padding: "10px",
              fontWeight: "bold",
              fontSize: "16px",
              borderRadius: "100px",
              display: "inline-block",
              marginLeft: "16px",
            }}
          >
            {state}
          </span>
        ) : (
          <span className="job-state active">{state}</span>
        )}
        <div className="job-sigun">남양주시</div>
        <div className="job-title">{title}</div>
        <div className="job-company">남양주시니어클럽</div>
        <div className="job-money">
          <FaqSvg /> <span>임금은 기관에 문의해주세요.</span>
        </div>
        <div className="job-recrut">
          <RecrutSvg /> <span>1명</span> 모집중이에요
        </div>
        {recrut ? (
          <div className="job-dday">
            <DdaySvg /> <span>4일</span> 뒤 신청이 마감돼요
          </div>
        ) : (
          <div className="job-dday">
            <DdaySvg /> <span>신청이 마감되었습니다.</span>
          </div>
        )}

        <div className="job-btns">
          <div className="job-btn-favorites">
            <FavoritesSvg />
            <span>관심 일자리 등록하기</span>
          </div>
          {resume ? (
            <div className="job-btn-resume">신청하기</div>
          ) : (
            <div
              className="job-btn-resume"
              style={{ backgroundColor: "#838383" }}
            >
              마감된 일자리에요
            </div>
          )}
        </div>
      </div>
    </StyleContainer>
  );
}
