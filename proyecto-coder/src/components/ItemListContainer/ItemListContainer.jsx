import {useState,useEffect} from "react";
import ItemList from"../ItemList/ItemList";
const ItemListContainer = ({greeting}) => {

    const [productos,setProductos] = useState ([]);

    useEffect (()=>{
  
      const fetchData =  async ()=> {
        try {
          const response = await fetch("./productos.json");
          const data = await response.json()
          console.log(data); // Agregar esta línea para imprimir los datos
          setProductos (data)
          }catch(error){
            console.log("error en el fetch" + error)
          }
    }
  
    fetchData()
    
  }, [])

  console.log(productos)
return (
  <div>
 
 <h1>{greeting}</h1>

 {productos.length == 0
 ?
<h1>Espere por favor</h1>
:
<ItemList productos={productos}/>
}

 </div>
)
}

export default ItemListContainer;