import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { verProductos } from './VerProducto';
/*import {getDataID} from './getItems'

import {useParams} from 'react-router-dom';*/

/* function ItemDetailContainer(){

  const [curso, setCurso] = useState([]);
    
    const id = useParams()

     useEffect(() => {
          const data = async () => {
              const sata = await getDataID(id); 
              setCurso(sata)
          }
          data([])
      },[]);
       
return(
  <div>
    {

  <ItemDetail imagen={curso.pictureUrl} titulo={curso.tittle} resumen={curso.resumen} precio={curso.price}></ItemDetail>
      
    }
  </div>
)
}

export default ItemDetailContainer; */

const ItemDetailContainer = () => {

  const [ver, setVer] = useState ([])

  useEffect(() => {
   getVer ()
  }, [])

  const getVer = ()  => {
       const getVerPromise = new Promise ((resolve, reject) =>{
           setTimeout(() => {
               resolve( verProductos )
           }, 2000);
       })

       getVerPromise.then ( detalle => {
           setVer( detalle );
       })
  }
   return (
       <div>
         {ver.map ( k => <ItemDetail key={k.id} ver={k}/>)}
       </div>
   )
}
export default ItemDetailContainer;