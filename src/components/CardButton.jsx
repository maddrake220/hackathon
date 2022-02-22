import styled from "styled-components";

const CardButton = ({ backgroundColor, text = "내 주변 일자리" }) => {
  return (
    <StyledCardButton backgroundColor={backgroundColor}>
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.6785 50.4L47.9037 55.6178L61.4901 53.3966C58.7483 52.0214 55.0367 51.0386 50.6785 50.4ZM15.6793 51.5376C9.38654 53.1972 5.3999 55.9166 5.3999 59.9558C5.40249 60.8254 5.59257 61.6842 5.95718 62.4737L27.7624 58.9097L15.6793 51.5376ZM66.0887 57.6L35.7407 62.5464L43.7442 71.6515C56.8871 70.4743 66.5999 66.276 66.5999 59.9558C66.5999 59.1134 66.4185 58.3308 66.0887 57.6007V57.6ZM30.6129 63.3996L10.1073 66.7512C15.5274 70.1093 25.0941 72 35.9999 72C36.6609 72 37.3067 71.9813 37.9576 71.9676L30.6129 63.3996Z"
          fill="white"
        />
        <path
          d="M36.0015 0C24.2655 0 14.6362 9.59976 14.6362 21.3091C14.6362 25.8106 16.0669 30.0038 18.4825 33.4519L32.3309 57.3919L32.39 57.469C32.9365 58.1825 33.47 58.7455 34.0964 59.1595C34.7228 59.5742 35.5004 59.8219 36.2636 59.7456C37.7885 59.593 38.7224 58.5158 39.6087 57.3149L39.6562 57.253L54.9447 31.2314L54.9533 31.2149C55.3119 30.5669 55.5769 29.9074 55.8015 29.2651C56.8328 26.7394 57.3634 24.0373 57.3639 21.3091C57.3639 9.59976 47.7375 0 36.0015 0ZM36.0015 12.2724C41.0926 12.2724 45.0663 16.2389 45.0663 21.3084C45.0663 26.3794 41.0926 30.3444 36.0015 30.3444C30.9097 30.3444 26.9338 26.3786 26.9338 21.3084C26.9338 16.2396 30.9104 12.2724 36.0015 12.2724Z"
          fill="white"
        />
      </svg>
      <div className="text">{text}</div>
    </StyledCardButton>
  );
};

export default CardButton;

const StyledCardButton = styled.div`
  width: 152px;
  height: 152px;
  cursor: pointer;
  background: ${(props) => props.backgroundColor};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .text {
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    color: #000000;

    opacity: 0.4;
  }
`;
