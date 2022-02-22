import styled from "styled-components";

const CustomButton2 = ({ primary, text }) => {
  return <StyledCustomButton primary={primary}>{text}</StyledCustomButton>;
};

export default CustomButton2;

const StyledCustomButton = styled.div`
  box-sizing: border-box;
  width: 161px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.primary ? "black" : "white")};
  background-color: ${(props) => (props.primary ? "white" : "#248fe5")};
  border: 1px solid ${(props) => (props.primary ? "#248fe5" : "none")};
`;
