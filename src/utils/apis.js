import axios from "axios";

const KEY = "3e605315a9844e86a83afb7d950eee1a";
//const URL = `https://openapi.gg.go.kr/OldpsnjobBi?KEY=${KEY}&pIndex=1&pSize=50&SIGUN_CD=41310`;
const URL2 = `https://openapi.gg.go.kr/GGSOCIALELDJOBSTM?KEY=${KEY}&pIndex=1&pSize=50&SIGUN_CD=41310`;

export const getDatas = async () => {
  try {
    const data = await axios.get(URL2);
    return data;
  } catch (error) {
    console.log(error, "Error while getting datas");
  }
};
