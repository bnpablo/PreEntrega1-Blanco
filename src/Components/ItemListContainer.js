const styles = {
  fontFamily: "sans-serif",
  color: "black",
  backgroundColor: "red",
  opacity: 0.6,
};

//Profe, entendí como "styling integrado" que el estilo este dentro de la clase ItemListContainer, de no ser asi avisame y lo corrijo.

function ItemListContainer(props) {
  return (
    <div>
      <h1 style={styles}>{props.mensaje}</h1>
    </div>
  );
}

export default ItemListContainer;
