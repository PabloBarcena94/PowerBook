import {useState} from 'react'


 export function ItemCount ({stock, initial=1, onAdd}) {

    const [contador, setContador] = useState (initial)

    const handleCount = (operator) => {
        if(operator === '+') {
            if (stock > contador) {
                setContador (contador + 1)
            }

        } else if (operator === '-') {
            if (contador > 1) {
                setContador (contador - 1)
            }
        }

    }
    return (

        <div>
                <button onClick={() => handleCount ('-')}> - </button>           
                <span>{contador}</span>
                <button onClick={() => handleCount ('+')}> + </button>
                
            <div>
                <button disabled={!stock} onClick={onAdd(initial)}>Agregar al carrito</button>    
            </div>
        
        </div>
        

    )
}