import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import CenterCard from "./CenterCard";
import MainSvg from "./MainSvg";

import "swiper/css";
import "swiper/css/pagination";
import { values } from "lodash";
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
  const slideRef = useRef();
  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [seleted, setSeleted] = useState(null);
  const [seletedSlide, setSeletedSlide] = useState(null);
  useEffect(() => {
    const grouped = groupBy(data, "SIGUN_NM");
    setCategoryData(Object.values(grouped));
    const arr = [];
    for (const [key, value] of Object.entries(grouped)) {
      arr.push(`${key} ${value.length}개`);
    }
    setCategories(arr);
  }, [data]);

  useEffect(() => {
    if (seletedSlide !== null) {
      const std = document.getElementById(seletedSlide);

      var cellArray = Array.from(document.querySelectorAll(".category"));
      cellArray.forEach(function (node, idx) {
        node.classList.remove("seleted-slide");
      });
      std.classList.add("seleted-slide");
    }
  }, [seletedSlide]);
  const onClick = useCallback((e) => {
    setSeletedSlide(e.target.id);
    setSeleted(e.target.innerText.split(" ")[0]);
  }, []);
  return (
    <StyledCenterList>
      <div style={{ marginTop: "10px" }}></div>
      <MainSvg />
      <div className="title">
        <h2>행복한 시니어를 위한 20가지 조건</h2>
      </div>
      <div style={{ marginTop: "10px" }}></div>

      <Swiper style={{ width: "340px", cursor: "pointer" }} slidesPerView={4}>
        {categories.map((v, index) => (
          <SwiperSlide
            id={index}
            className={`category`}
            onClick={onClick}
            style={{
              marginLeft: "5px",
              width: "120px",
              height: "43px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <div id={index}>{v}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ul className="center-list">
        {seleted !== null
          ? data
              .filter((v) => v.SIGUN_NM._text === seleted)
              .map((v) => {
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
                />
              );
            })}
      </ul>
    </StyledCenterList>
  );
};

export default CenterList;

const StyledCenterList = styled.div`
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
