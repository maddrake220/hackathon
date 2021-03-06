import styled from "styled-components";
import { useInputChange } from "../hooks/userInputChange";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  background-color: #fff;
  padding: 26px 20px 20px;
  h4 {
    /* border: 1px solid blue; */
    margin: 0 auto;
    padding-bottom: 10px;
    font-size: 30px;
    font-weight: bold;
  }
  p {
    font-size: 18px;
    color: #666;
    line-height: 27px;
    margin-bottom: 16px;
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
const ButtonBox = styled.div`
  border-top: 1px solid #f3f3f3;
  padding: 0;
  margin: 0;
  width: 360px;
  input {
    width: 180px;
    border: none;
    height: 60px;
    background-color: #356ee7;
    color: #fff;
    font-size: 18px;
  }
  button {
    height: 60px;
    width: 180px;
    border: none;
    font-size: 18px;
  }
`;

export const LoginForm = () => {
  const [handleInputChange] = useInputChange();
  let Navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();
    const UserInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (UserInfo.name === "?????????") {
      Navigate("/applylist");
    }
  }

  return (
    <>
      <Banner>
        <span>????????????????????????</span>
        <span>????????????</span>
      </Banner>
      <Wrapper>
        <h4>?????? ???????????? ??????</h4>
        <p>
          ?????? ??????????????? ??????????????? ????????? ?????? ??????????????? ?????? ??????????????????
        </p>
        <form onSubmit={onSubmit}>
          <Label htmlFor="name">??????</Label>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={handleInputChange}
            />
          </div>
          <Label>??????</Label>
          <div>
            <input
              type="radio"
              id="male"
              value="male"
              name="gender"
              required
              onChange={handleInputChange}
            />
            <label htmlFor="male">???</label>
            <input
              type="radio"
              id="female"
              value="female"
              name="gender"
              required
              onChange={handleInputChange}
            />
            <label htmlFor="female">???</label>
          </div>
          <Label htmlFor="date_of_birth">????????????</Label>
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
            <Info>??????</Info>
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

            <Info>???</Info>
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
            <Info>???</Info>
          </MonthDate>

          <Label htmlFor="contact_number">?????????</Label>
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
        </form>
      </Wrapper>
      <ButtonBox>
        <button>????????????</button>
        <input type="submit" value="???????????? ??????" />
      </ButtonBox>
    </>
  );
};
