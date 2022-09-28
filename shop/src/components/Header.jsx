import React, { useState } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price));
  return (
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='summa'> Bedrach: {new Intl.NumberFormat().format(summa)}$ </p>
    </div>
  )
}
const showNothing = () => {
  return (
    <dov className='empty'>
        <h2>Geen Producten</h2>
    </dov>
  )
}

export default function Header(props) {
  let [cartOpen , setCartOpen] = useState(false);
  return (
<header>
    <div>
        <span className='logo'>Shop House</span>
        <ul className='nav'>
            <li>About</li>
            <li>Contact</li>
            <li>Producten</li>
        </ul>
        <FaShoppingBag onClick={()=> setCartOpen(cartOpen = !cartOpen)} className={`shop-card-button ${cartOpen && 'active'}`}/>
        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
            showOrders(props): showNothing() }
          </div>
        )}
    </div>
    <div className="presentation"></div>
</header>
  )
}
