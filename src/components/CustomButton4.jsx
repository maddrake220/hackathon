import styled from "styled-components";

const CustomButton = ({ primary, onClick, text, style, like }) => {
  return (
    <StyledCustomButton primary={primary} onClick={onClick} style={style}>
      <div>{like ? "관심 등록 취소 하기" : text}</div>
    </StyledCustomButton>
  );
};

export default CustomButton;

const StyledCustomButton = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  width: 320px;
  height: 48px;
  background: ${(props) => (props.primary ? "#fff" : "#356EE7")};
  border: 1px solid ${(props) => (props.primary ? "#C5C5C5" : "none")};

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => (props.primary ? "#356EE7" : "#fff")};
`;
