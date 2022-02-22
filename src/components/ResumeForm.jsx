import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useInputChange } from "../userInputChange";
import Modal from "./Modal";

// styled-components
const Wrapper = styled.section`
  padding: 20px;
  background-color: #fff;
  h1 {
    padding: 2px 0 10px;
    margin: 0 auto;
    font-size: 24px;
    font-weight: bold;
  }
  span {
    display: block;
    color: #666666;
    margin-bottom: 20px;
  }
  form {
    font-size: 18px;
    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      /* border: 1px solid red; */
      margin: 0 0 5px;
      width: 100%;
      input {
        background-color: #f3f3f3;
        border: 0px;
        height: 40px;
        width: 100%;
      }
      label {
        padding-right: 100px;
        width: 80%;
      }
      span {
        color: #333;
        font-size: 18px;
      }
      select {
        width: 126px;
        height: 40px;
        background-color: #f3f3f3;
        margin-right: 5px;
        /* margin-bottom: 5px; */
        text-align: center;
        font-size: 18px;
      }
    }
  }
`;
const MonthDate = styled.div`
  select {
    width: 126px;
    height: 40px;
    background-color: #f3f3f3;
    margin-right: 5px;
    text-align: center;
    border: 1px solid green;
  }
`;

const Label = styled.label`
  display: block;
  padding: 10px 0;
`;

const Info = styled.span`
  display: block;
  box-sizing: border-box;
  padding-top: 10px;
  margin-right: 10px;
`;
const Tel = styled.div`
  input {
    width: 90px;
    margin-right: 5px;
  }
  input:nth-child(2) {
    width: 90px;
    margin: 0 5px;
  }
  input:last-child {
    width: 90px;
    margin-left: 5px;
  }
`;
const SubmitBtn = styled.input`
  width: 80%;
  margin-bottom: 10px;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 360px;
  border: 1px solid red;
  input {
    width: 50%;
  }
  button {
    border: 1px solid red;
    width: 180px;
    height: 60px;
    background-color: #356ee7;
  }
`;

export const ResumeForm = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [input, handleInputChange] = useInputChange();

  const openModal = () => {
    setIsShowing(true);
  };
  useEffect(() => {
    if (isShowing) {
      const notiTimer = setTimeout(() => {
        setIsShowing(false);
      }, 3000);
      return () => clearTimeout(notiTimer);
    }
  }, [isShowing]);

  function onSubmit(e) {
    e.preventDefault();
    console.log(input);
    localStorage.setItem("userInfo", JSON.stringify(input));
  }

  return (
    <Wrapper>
      <h1>일자리 신청하기</h1>
      <span>아래 개인정보를 모두 입력해주세요.</span>
      <form onSubmit={onSubmit}>
        <Label htmlFor="name">이름</Label>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="음성인식을 사용하시려면 옆의 아이콘을 눌러주세요."
            required
            onChange={handleInputChange}
          />
        </div>
        <Label>성별</Label>

        <div>
          <input
            type="radio"
            id="male"
            value="male"
            name="gender"
            required
            onChange={handleInputChange}
          />
          <label htmlFor="male">남</label>
          <input
            type="radio"
            id="female"
            value="female"
            name="gender"
            required
            onChange={handleInputChange}
          />
          <label htmlFor="female">여</label>
        </div>

        <Label htmlFor="date_of_birth">생년월일</Label>
        <div>
          <select>
            <option selected>1960</option>
            <option>1959</option>
            <option>1958</option>
            <option>1957</option>
            <option>1956</option>
            <option>1955</option>
            <option>1954</option>
            <option>1953</option>
            <option>1952</option>
            <option>1951</option>
            <option>1950</option>
            <option>1949</option>
            <option>1948</option>
            <option>1947</option>
            <option>1946</option>
            <option>1945</option>
            <option>1944</option>
            <option>1943</option>
            <option>1942</option>
            <option>1941</option>
            <option>1940</option>
          </select>
          <Info>년도</Info>
        </div>
        <MonthDate>
          <select>
            <option selected>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>

          <Info>월</Info>
          <select>
            <option selected>31</option>
            <option>30</option>
            <option>29</option>
            <option>28</option>
            <option>27</option>
            <option>26</option>
            <option>25</option>
            <option>24</option>
            <option>23</option>
            <option>22</option>
            <option>21</option>
            <option>20</option>
            <option>19</option>
            <option>18</option>
            <option>17</option>
            <option>16</option>
            <option>15</option>
            <option>14</option>
            <option>13</option>
            <option>12</option>
            <option>11</option>
            <option>10</option>
            <option>9</option>
            <option>8</option>
            <option>7</option>
            <option>6</option>
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
          <Info>일</Info>
        </MonthDate>

        <Label htmlFor="contact_number">연락처</Label>
        <Tel>
          <input
            type="text"
            id="contact_number"
            name="phone"
            onChange={handleInputChange}
            required
          />
          -
          <input
            type="text"
            id="contact_number"
            name="phone"
            onChange={handleInputChange}
            required
          />
          -
          <input
            type="text"
            id="contact_number"
            name="phone"
            onChange={handleInputChange}
            required
          />
        </Tel>
        <ButtonBox>
          <SubmitBtn type="submit" value="접수하기" onClick={openModal} />
          <div>{isShowing && <Modal message="일자리 신청을 완료했어요" />}</div>
          <button>취소</button>
        </ButtonBox>
      </form>
    </Wrapper>
  );
};
