const styles = {
    fontFamily: 'Courier',
    color: 'blue',
    backgroundColor: 'red',
    opacity: 0.3,
}

function ItemListContainer (props){
return (

    <div>
    <h1 style={styles}>{props.mensaje}</h1>
    </div>
);


};

export default ItemListContainer;