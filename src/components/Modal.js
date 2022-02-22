import { createPortal } from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  /* border: 1px solid red; */
  width: 360px;
  padding-bottom: 180px;
  background-color: rgba(0, 0, 0, 0.8);
  height: 980px;
  display: flex;
  align-items: flex-end;
  top: 0px;
  /* left: 0; */
`;

const Wrapper = styled.div`
  background-color: #fff;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  border-radius: 10px;
  h4 {
    color: #333;
    font-weight: 700;
    font-size: 24px;
    margin: 30px 0;
  }
  p {
    font-size: 18px;
    padding: 0 20px;
    line-height: 26px;
    span {
      font-weight: 700;
      font-size: 20px;
    }
  }
`;

const Modal = (props) => {
  const { message } = props;
  return createPortal(
    <Container>
      <Wrapper>
        <img src="/images/bi_check-circle-fill.png" alt="check" />
        <h4>{message}</h4>
        <p>
          <span>남양주시니어클럽</span>이 확인하고 전화 드릴게요. 신청한 내용은
          ‘나의 신청내역’에서 확인 할 수 있어요.
        </p>
      </Wrapper>
    </Container>,
    document.getElementById("modal")
  );
};

export default Modal;
