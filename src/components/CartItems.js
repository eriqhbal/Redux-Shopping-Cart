import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";
const CartItems = () => {
  const myCartItems = useSelector((state) => state.cart.itemsList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {myCartItems?.map((item) => (
          <li key={item.id}>
            <CartItem quantity={item.quantity} id={item.id} price={item.price} total={item.totalPrice} name={item.name}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
