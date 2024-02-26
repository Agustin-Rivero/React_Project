import { useState } from "react"


const Contador =({initial,stock}) => {

    const [contador,setContador] = useState (1);

    const sumar = () => {
        if(contador < stock){
         setContador(contador + 1)
         }
    }
   
   
    const restar = () => {
        if(contador > initial){
            setContador(contador - 1)
        }
    }


    const agregaCarrito = () => {
        alert ("AGREGASTE ESTA CANTIDAD DE PRODUCTOS" +contador)
    }

    return (
        <div>

        <p>Productos agregados: {contador}</p>

        <button onClick = {restar}>-</button>

        <button Onclick={agregaCarrito}> Agregar al carrito</button>

        <button onClick = {sumar}>+</button>
    
        </div>
    )

}
 export default Contador;