const styles = {
  fontFamily: "sans-serif",
  color: "black",
  backgroundColor: "red",
  opacity: 0.6,
};

function ItemListContainer(props) {
  return (
    <div>
      <h1 style={styles}>{props.mensaje}</h1>
    </div>
  );
}

export default ItemListContainer;
