import cart from './Img/cart.png'
import './CartWidget.css'


export function CartWidget () {
        return (
                <div>
                <img className="carrito" src = {cart} />
                <span className="notif">30</span>
                </div>
                
        );
        
}