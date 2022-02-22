import { ResumeForm } from "../components/ResumeForm";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getJob } from "../utils/apis";

const Wrapper = styled.main`
  width: 360px;
`;
const Banner = styled.div`
  width: 360px;
  height: 160px;
  background-color: #248fe5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    color: #fff;
    font-size: 24px;
  }
  span:last-child {
    margin-top: 10px;
    font-size: 36px;
    color: #fff;
    font-weight: 700;
  }
`;

// 접수 진행중
const JobPostWrapper = styled.div`
  background-color: #248fe5;
  margin-bottom: 10px;
`;
const Container = styled.div`
  top: 280px;
  background-color: #fff;
  display: flex;
  width: 328px;
  padding: 0 16px 12px;
  flex-direction: column;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;
const State = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0 12px 0px;
  width: 98px;
  height: 40px;
  background-color: #ff5555;
  border-radius: 100px;
  div {
    color: #fff;
  }
`;
const City = styled.div`
  font-size: 20px;
  margin-bottom: 8px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  height: 36px;
  padding-top: 5px;
  box-sizing: border-box;
  margin-bottom: 4px;
`;
const Place = styled.div`
  /* height: 30px; */
  font-size: 20px;
  font-weight: 700;
  padding-top: 2px;
  box-sizing: border-box;
  margin-bottom: 8px;
  margin: 4px 0 8px;
`;
const Wage = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 8px 0;
  img {
    display: block;
    width: 20px;
    /* border: 1px solid rebeccapurple; */
    padding: 0 4px;
  }
  span {
    font-size: 20px;
    margin-left: 3px;
  }
`;
const Recrut = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin: 8px 0;
  img {
    width: 24px;
    /* border: 1px solid blue; */
  }
  span {
    color: #248fe5;
    margin-left: 5px;
    font-weight: bold;
  }
`;
const Deadline = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin: 8px 0;
  img {
    width: 24px;
    /* border: 1px solid blue; */
  }
  span {
    color: #ff5555;
    font-weight: bold;
    margin-left: 5px;
  }
`;

const Resume = () => {
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    // center 정보 호출
    getJob().then((res) => {
      setJobData(res);
    });
  }, []);

  return (
    <Wrapper>
      <Banner>
        <span>어르신행복일자리</span>
        <span>신청하기</span>
      </Banner>
      {jobData.slice(0, 1).map((value, index) => {
        return (
          <JobPostWrapper>
            <Container>
              <State>
                <div key={index}>{value?.STATE_DIV_NM._text}</div>
              </State>
              <City key={index}>{value?.SIGUN_NM?._text}</City>
              <Title key={index}>{value?.ENTRPS_NM?._text}</Title>
              <Place key={index}>{value?.OPERT_INST_NM?._text}</Place>

              <Wage key={index}>
                <img src="/images/mdi_hand-coin.png" alt="coinhand" />{" "}
                <span>기관문의</span>
              </Wage>
              <Recrut key={index}>
                <img src="/images/bi_person.png" alt="person" />{" "}
                <span>{value?.RECRUT_PSNNUM?._text}</span>명 모집중이에요
              </Recrut>
              <Deadline key={index}>
                <img
                  src="/images/ant-design_calendar-filled.png"
                  alt="person"
                />{" "}
                <span>이틀</span> 뒤 신청이 마감돼요
              </Deadline>
            </Container>
          </JobPostWrapper>
        );
      })}

      <ResumeForm />
    </Wrapper>
  );
};

export default Resume;
