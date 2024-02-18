
const Item = ({producto}) => {
    return(
        <div key={producto.id}>
            <h2>{producto.nombre}</h2>
            <h2>{producto.precio}</h2>
            <h2>{producto.stock}</h2>
            <h2>{producto.descripcion}</h2>
        </div>
    );
};
export default Item