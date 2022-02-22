import { useCallback } from "react";
import styled from "styled-components";

const SearchInput = ({
  search,
  setSearch,
  onClick,
  autoFocus = false,
  onKeyPress,
}) => {
  const onChange = useCallback(
    (e) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );
  return (
    <StyledSearchInput>
      <input
        onKeyPress={onKeyPress}
        autoFocus={autoFocus}
        placeholder="사는 지역의 시,군을 입력하세요."
        type="text"
        value={search}
        onChange={onChange}
      />
      <div className="search-icon" onClick={onClick}>
        <svg
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.886 2.28571C16.7654 2.28571 19.527 3.42959 21.5631 5.4657C23.5992 7.50181 24.7431 10.2634 24.7431 13.1429C24.7431 15.5223 23.9774 17.7223 22.6802 19.512L29.9557 26.7874C30.2702 27.0974 30.453 27.5168 30.466 27.9583C30.4789 28.3997 30.321 28.8292 30.0251 29.157C29.7292 29.4849 29.3182 29.6859 28.8777 29.7182C28.4373 29.7505 28.0013 29.6115 27.6608 29.3303L27.5305 29.2126L20.2551 21.9371C18.4039 23.2815 16.1738 24.0038 13.886 24C11.0065 24 8.2449 22.8561 6.20879 20.82C4.17268 18.7839 3.02881 16.0224 3.02881 13.1429C3.02881 10.2634 4.17268 7.50181 6.20879 5.4657C8.2449 3.42959 11.0065 2.28571 13.886 2.28571ZM13.886 5.71429C11.9158 5.71429 10.0263 6.49694 8.63316 7.89006C7.24003 9.28319 6.45738 11.1727 6.45738 13.1429C6.45738 15.113 7.24003 17.0025 8.63316 18.3956C10.0263 19.7888 11.9158 20.5714 13.886 20.5714C15.8561 20.5714 17.7456 19.7888 19.1387 18.3956C20.5319 17.0025 21.3145 15.113 21.3145 13.1429C21.3145 11.1727 20.5319 9.28319 19.1387 7.89006C17.7456 6.49694 15.8561 5.71429 13.886 5.71429Z"
            fill="#BB6A17"
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
    width: 340px;
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

    border: 4px solid #bb6a17;
    box-sizing: border-box;
    border-radius: 48px;
    ::placeholder {
      opacity: 0.4;
    }
  }

  .search-icon {
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 14px;
  }
`;
