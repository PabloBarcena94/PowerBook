import {detalleProductos} from '../ItemDetailContainer/detalleProductos.jsx'
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard"


 const ItemList = () => {

   const [productos, setProductos] = useState ([])

   useEffect(() => {
    getProductos ()
   }, [])

   const getProductos = ()  => {
        const getProductosPromise = new Promise ((resolve, reject) =>{
            setTimeout(() => {
                resolve( detalleProductos )
            }, 2000);
        })

        getProductosPromise.then ( detalle => {
            setProductos( detalle );
        })
   }
    return (
        <div>
           {productos.map ( m => <ItemCard key={m.id} productos={m}/>)} 
           
        </div>
    )
}
export default ItemList 