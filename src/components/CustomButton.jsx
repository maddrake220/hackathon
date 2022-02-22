import styled from "styled-components";

const CustomButton = ({ primary, onClick, text }) => {
  return (
    <StyledCustomButton primary={primary} onClick={onClick}>
      <div>{text}</div>
    </StyledCustomButton>
  );
};

export default CustomButton;

const StyledCustomButton = styled.div`
  cursor: pointer;
  width: 320px;
  height: 48px;
  background: ${(props) => (props.primary ? "#fff" : "#248fe5")};
  border: 1px solid #248fe5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => (props.primary ? "#248fe5" : "#fff")};
`;
