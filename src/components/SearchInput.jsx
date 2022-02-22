import styled from "styled-components";

const SearchInput = () => {
  return (
    <StyledSearchInput>
      <input placeholder="지역구(시군구)를 입력하세요." type="text" />
      <div className="search-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.325 14.899L21.705 20.279C21.8941 20.4682 22.0003 20.7248 22.0002 20.9923C22.0001 21.2599 21.8937 21.5164 21.7045 21.7055C21.5153 21.8946 21.2587 22.0008 20.9912 22.0007C20.7236 22.0006 20.4671 21.8942 20.278 21.705L14.898 16.325C13.2897 17.5707 11.2673 18.1569 9.24214 17.9643C7.21699 17.7718 5.34124 16.815 3.99649 15.2886C2.65174 13.7622 1.939 11.7808 2.00326 9.74754C2.06753 7.71427 2.90396 5.78185 4.34242 4.34339C5.78087 2.90494 7.71329 2.0685 9.74656 2.00424C11.7798 1.93998 13.7612 2.65272 15.2876 3.99747C16.814 5.34222 17.7708 7.21797 17.9634 9.24312C18.1559 11.2683 17.5697 13.2907 16.324 14.899H16.325ZM10 16C11.5913 16 13.1174 15.3679 14.2427 14.2426C15.3679 13.1174 16 11.5913 16 9.99999C16 8.40869 15.3679 6.88257 14.2427 5.75735C13.1174 4.63213 11.5913 3.99999 10 3.99999C8.40871 3.99999 6.88259 4.63213 5.75737 5.75735C4.63215 6.88257 4.00001 8.40869 4.00001 9.99999C4.00001 11.5913 4.63215 13.1174 5.75737 14.2426C6.88259 15.3679 8.40871 16 10 16Z"
            fill="#356EE7"
          />
        </svg>
      </div>
    </StyledSearchInput>
  );
};

export default SearchInput;

const StyledSearchInput = styled.div`
  position: relative;
  > input {
    width: 320px;
    padding: 0 20px 0 20px;
    height: 48px;
    left: 20px;
    top: 0px;
    font-family: "Noto Sans CJK KR";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */

    color: #000000;

    border: 4px solid #356ee7;
    box-sizing: border-box;
    border-radius: 48px;
    ::placeholder {
      opacity: 0.4;
    }
  }

  .search-icon {
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 26px;
  }
`;