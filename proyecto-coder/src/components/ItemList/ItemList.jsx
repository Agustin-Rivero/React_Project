import Item from "../Item/Item.jsx"
import "./ItemList.css"

 const ItemList = ({productos}) => {
     return (
         <div className="ItemList">
           {
             productos.map((producto)=>{
                 return (
                     <Item producto={producto}/>
                 )
             })
             }
             </div>
     )
}

export default ItemList

