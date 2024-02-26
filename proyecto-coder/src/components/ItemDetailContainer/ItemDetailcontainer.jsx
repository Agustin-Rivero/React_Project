import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({id}) => {

  const [producto,setProducto] = useState ([]);

  useEffect (()=>{

    const fetchData =  async ()=> {
      try {
        const response = await fetch("./productos.json");
        const data = await response.json()
        const product = data.find((p)=>p.id == id)
        setProducto (product)
        }catch(error){
          console.log(!"error en el fetch"+error)
        }
  }

  fetchData()
  
}, [id])


  return (
    <div>
    <ItemDetail producto = {producto}/>
    </div>
  )
}

export default ItemDetailContainer