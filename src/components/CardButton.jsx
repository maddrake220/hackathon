import styled from "styled-components";

const CardButton = ({ onClick, backgroundColor, text = "내 주변 일자리" }) => {
  return (
    <StyledCardButton backgroundColor={backgroundColor} onClick={onClick}>
      <div className="text">{text}</div>
      <div className="go-now">
        <span>바로가기</span>
        <svg
          width="27"
          height="30"
          viewBox="0 0 27 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_65_1470)">
            <path
              d="M25.6992 16.3242L16.3242 25.6992C15.9609 26.0684 15.4805 26.25 15 26.25C14.5195 26.25 14.0402 26.0669 13.6746 25.7007C12.9422 24.9683 12.9422 23.7817 13.6746 23.0493L19.8516 16.875H1.87501C0.839653 16.875 0.00012207 16.0371 0.00012207 15C0.00012207 13.9629 0.839653 13.125 1.87501 13.125H19.8516L13.6758 6.94922C12.9434 6.2168 12.9434 5.03027 13.6758 4.29785C14.4082 3.56543 15.5947 3.56543 16.3272 4.29785L25.7022 13.6729C26.4316 14.4082 26.4316 15.5918 25.6992 16.3242V16.3242Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_65_1470">
              <rect width="26.25" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </StyledCardButton>
  );
};

export default CardButton;

const StyledCardButton = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  /* identical to box height */
  color: white;
  display: flex;
  align-items: center;
  text-align: center;
  width: 320px;
  height: 116px;
  cursor: pointer;
  background: ${(props) => props.backgroundColor};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  .go-now {
    display: flex;
    align-items: center;
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    > span {
      margin-right: 8px;
    }
  }
`;
