import React from 'react';
import CartItem from './CartItem.jsx';
import { useSelector } from 'react-redux';

export const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  return amount <= 0 ? (
    <>
      <section className='cart'>
        <header>
          <h2>Your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    </>
  ) : (
    <>
      <section className='cart'>
        <header>
          <h2>Your Bag</h2>
        </header>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <footer>
          <hr />
          <div className='cart-total'>
            <h4>
              total<span>${total}</span>
            </h4>
          </div>
          <button className='btn clear-btn'>clear cart</button>
        </footer>
      </section>
    </>
  );
};
