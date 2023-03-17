import React, {useState} from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.jsx';
import './ItemCard.css'  
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {ItemCount} from '../ItemCount/ItemCount.jsx';
//import {Link} from "Link";
const ItemCard = ( props ) => {

  const {id, title, author, description, price, pictureUrl} = props.productos

  const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true)
    }
    const onAdd = (count) => {
      console.log (`el numero agregado es ${count}`)
    }
  
return ( 

  //<div className="cards">
  //<div className="card w-96 bg-base-100 shadow-xl">
    
   // <figure><img src={pictureUrl} alt="Shoes"/></figure>
   // <div className="card-body">
     // <h2 className="card-title">{title}</h2>
     // <h5>{author}</h5>
     // <p>{description}</p>
     // <p>{price}</p>
     // <div className="card-actions justify-end">
<div className="cardss">
<div className="cards">
     <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={pictureUrl} />
     <Card.Body>
     <Card.Title>{title}</Card.Title>
     <Card.Title>{author}</Card.Title>
     <Card.Text>{description}</Card.Text>
     <Card.Text>{price}</Card.Text>
     <Button variant="primary" onClick={handleButtonClick}> Ver detalle</Button>
     <ItemCount stock ={5} initial={1} onAdd = {onAdd}/>
     </Card.Body>
     </Card>   
</div>
    <div>
      {buttonClicked ? (<ItemDetailContainer id={id}></ItemDetailContainer>): null}
    </div>
    
    
  </div>

        )
}

export default ItemCard 