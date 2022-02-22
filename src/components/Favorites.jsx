import Card from "./Card";

const Favorites = ({ user }) => {
  console.log(user);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {user?.favorites.map((v) => {
        return (
          <Card
            id={v.id}
            key={v.id}
            data={v}
            title={v.data.INST_DIV._text}
            text={v.data.INST_NM._text}
            latitude={v.data.REFINE_WGS84_LAT._text}
            longitude={v.data.REFINE_WGS84_LOGT._text}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
