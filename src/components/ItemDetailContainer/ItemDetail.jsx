import React from 'react';


//import {Link} from "Link";
const ItemDetail = ( props ) => {

  const {id, resumen} = props.ver
  const onAdd = (count) => {
    console.log (`el numero agregado es ${count}`)
  }
  
  return (
    <div class="container">
        <div class="row">
            <div class="col">
              {resumen} {id}
              
            </div>
        </div>
    </div>
  )
}
export default ItemDetail 