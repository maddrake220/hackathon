import Card from "./Card";

const Main = ({ loading, error, data }) => {
  return (
    <div>
      {data?.OldpsnjobBi?.row?.map((v, index) => (
        <Card
          data={v}
          id={`id-0${index}`}
          title={v.BIZ_TYPE_NM._text}
          text={v.BIZ_CONT._text}
        />
      ))}
    </div>
  );
};
export default Main;
