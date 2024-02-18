
const ItemDetail = ({producto}) => {
    return(
        <div>
            <h1>{producto.nombre}</h1>
            <h3>{producto.precio}</h3>
            <h3>{producto.stock}</h3>
            <p>{producto.descrpcion}</p>
        </div>
    );
};
export default ItemDetail;