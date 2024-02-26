import Contador from "../Contador/Contador";


const ItemDetail = ({producto}) => {
    return(
        <div>
            <h1>{producto.nombre}</h1>
            <img src={producto.img} alt={producto.nombre} />
            <h3>{producto.precio}</h3>
            <h3>{producto.stock}</h3>
            <p>{producto.descrpcion}</p>

            <Contador initial={1} stock= {producto.stock}/>

        </div>
    );
};
export default ItemDetail;