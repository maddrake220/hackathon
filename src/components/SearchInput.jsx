import { useCallback } from "react";
import styled from "styled-components";

const SearchInput = ({
  search,
  setSearch,
  onKeyPress,
  onClick,
  autoFocus = false,
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
        placeholder="지역구(시군구)를 입력하세요."
        value={search}
        onChange={onChange}
        type="text"
      />
      <div className="search-icon" onClick={onClick}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.1428 2.28571C16.0223 2.28571 18.7839 3.42958 20.82 5.46569C22.8561 7.5018 24 10.2634 24 13.1428C24 15.5223 23.2343 17.7223 21.9371 19.512L29.2126 26.7874C29.5271 27.0974 29.7099 27.5168 29.7229 27.9583C29.7358 28.3997 29.5779 28.8291 29.282 29.157C28.9861 29.4849 28.5751 29.6859 28.1346 29.7182C27.6942 29.7505 27.2582 29.6115 26.9177 29.3303L26.7874 29.2126L19.512 21.9371C17.6608 23.2815 15.4307 24.0037 13.1428 24C10.2634 24 7.5018 22.8561 5.46569 20.82C3.42958 18.7839 2.28571 16.0223 2.28571 13.1428C2.28571 10.2634 3.42958 7.5018 5.46569 5.46569C7.5018 3.42958 10.2634 2.28571 13.1428 2.28571V2.28571ZM13.1428 5.71428C11.1727 5.71428 9.28318 6.49693 7.89006 7.89006C6.49693 9.28318 5.71428 11.1727 5.71428 13.1428C5.71428 15.113 6.49693 17.0025 7.89006 18.3956C9.28318 19.7888 11.1727 20.5714 13.1428 20.5714C15.113 20.5714 17.0025 19.7888 18.3956 18.3956C19.7888 17.0025 20.5714 15.113 20.5714 13.1428C20.5714 11.1727 19.7888 9.28318 18.3956 7.89006C17.0025 6.49693 15.113 5.71428 13.1428 5.71428V5.71428Z"
            fill="#248FE5"
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
    top: 8px;
    right: 14px;
  }
`;
