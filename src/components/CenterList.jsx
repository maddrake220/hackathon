import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import CenterCard from "./CenterCard";
import "swiper/css";
import "swiper/css/pagination";
import SearchInput from "./SearchInput2";
function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property]._text;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

const CenterList = ({ data }) => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState("");
  const onClick = useCallback(() => {
    setSearched(search);
  }, [search]);
  useEffect(() => {
    const grouped = groupBy(data, "SIGUN_NM");
    const arr = [];
    for (const [key, value] of Object.entries(grouped)) {
      arr.push(`${key} ${value.length}개`);
    }
    setCategories(arr);
  }, [data]);

  return (
    <StyledCenterList>
      <div className="search-input">
        <SearchInput search={search} setSearch={setSearch} onClick={onClick} />
      </div>
      <ul className="center-list">
        {searched !== ""
          ? data
              .filter((v) => v.SIGUN_NM._text === searched)
              .map((v) => {
                console.log(v);
                return (
                  <CenterCard
                    data={v}
                    key={v.DETAIL_TELNO._text}
                    id={v.DETAIL_TELNO._text}
                    name={v.FACLT_NM._text}
                    grp={v.COPRTN_GRP_NM._text}
                    address={v.REFINE_ROADNM_ADDR._text}
                    faxno={v.DETAIL_FAXNO._text}
                    telno={v.DETAIL_TELNO._text}
                    latitude={v.REFINE_WGS84_LAT._text}
                    longitude={v.REFINE_WGS84_LOGT._text}
                    city={v.SIGUN_NM._text}
                    person={v.ENFLPSN_PSTPSN_SUM._text}
                  />
                );
              })
          : data?.map((v, index) => {
              return (
                <CenterCard
                  data={v}
                  key={v.DETAIL_TELNO._text}
                  id={v.DETAIL_TELNO._text}
                  name={v.FACLT_NM._text}
                  grp={v.COPRTN_GRP_NM._text}
                  address={v.REFINE_ROADNM_ADDR._text}
                  faxno={v.DETAIL_FAXNO._text}
                  telno={v.DETAIL_TELNO._text}
                  latitude={v.REFINE_WGS84_LAT._text}
                  longitude={v.REFINE_WGS84_LOGT._text}
                  city={v.SIGUN_NM._text}
                  person={v.ENFLPSN_PSTPSN_SUM._text}
                />
              );
            })}
      </ul>
    </StyledCenterList>
  );
};

export default CenterList;

const StyledCenterList = styled.div`
  position: relative;
  .search-input {
    position: absolute;
    top: -170px;
    left: 12px;
  }
  .category {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #248fe5;
    border-radius: 20px;
    &.seleted-slide {
      color: white;
      background-color: #248fe5;
    }
  }

  .center-list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    > * {
      margin-top: 30px;
    }
  }
`;
