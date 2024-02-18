import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({id}) => {

  const [producto,setProducto] = useState ([]);

  useEffect (()=>{

    const fetchData =  async ()=> {
      try {
        const response = await fetch("../ItemListContainer/productos.json");
        const data = await response.json()
        const producto = data.find((p)=>p.ide == id)
        setProducto (producto)
        }catch(error){
          console.log(!"error en el fetch"+error)
        }
  }

  fetchData()
  
}, [])


  return (
    <div>
    <ItemDetail producto = {producto} />
    </div>
  )
}

export default ItemDetailContainer