import React, { useState, useEffect } from 'react';
import CartItem from './CartItem.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getAmount } from '../store/features/cart/CartSlice.js';

export const CartContainer = () => {
  const dispatch = useDispatch();
  const [cartAmount, setCartAmount] = useState(0);
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  useEffect(() => {
    try {
      dispatch(getAmount());
    } catch (error) {
      console.log(error);
    }
  }, []);

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
          <button
            className='btn clear-btn'
            onClick={() => dispatch(clearCart())}
          >
            clear cart
          </button>
        </footer>
      </section>
    </>
  );
};
