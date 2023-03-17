import comprar from './Img/comprar.png'
import './CartWidget.css'


export function CartWidget () {
        return (
                <div>
                <img className="carrito" src = {comprar} />
                <span className="notif">30</span>
                </div>
                
        );
        
}
