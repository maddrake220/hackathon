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
      {user?.favorites.map((item) => {
        console.log(item.data);
        return (
          <Card
            text={item.data.BIZ_TYPE_NM._text}
            id={item.id}
            key={item.id}
            title={item.data.INST_NM._text}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
