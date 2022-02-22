import axios from "axios";
import convert from "xml-js";

// export const getDatas = async () => {
//   try {
//     const data = await axios.get(URL2);
//     return data;
//   } catch (error) {
//     console.log(error, "Error while getting datas");
//   }
// };

const KEY = "78145ca5a324416b9836fc3cbecc69bd";
const JOBURL = `https://openapi.gg.go.kr/Oldpsnslfjobbiz?KEY=${KEY}&pIndex=1`;
const CNETERURL = `https://openapi.gg.go.kr/OldpsnLsrWelfaclt?KEY=${KEY}&pIndex=1`;

// 복지관 정보 호출
export const getCenter = async () => {
  const xmlData = await axios.get(CNETERURL).then(({ data }) => data);
  return convert.xml2js(xmlData, { compact: true, spaces: 4 }).OldpsnLsrWelfaclt
    .row;
};

// 구인 공고 호출
export const getJob = async () => {
  const xmlData = await axios.get(JOBURL).then(({ data }) => data);
  return convert
    .xml2js(xmlData, { compact: true, spaces: 4 })
    .Oldpsnslfjobbiz.row.sort(function (a, b) {
      return b.BEGIN_DE - a.BEGIN_DE;
    });
};
