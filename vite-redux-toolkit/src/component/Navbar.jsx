import React, { useEffect, useCallback } from 'react';
import { CartIcon } from '../icons.jsx';
import { useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

const Navbar = () => {
  // console.log(useSelector((store) => console.log(store)));
  const { amount, cartItems } = useSelector((store) => {
    // console.log(store);
    return store.cart;
  });

  // Debounced effect for side effects (logging, saving, etc.)
  const handleDebouncedAmountChange = useCallback(
    debounce((amount) => {
      console.log('Debounced total:', amount);
      // Optionally save to localStorage, update backend, etc.
    }, 500),
    [] // Only create once
  );

  useEffect(() => {
    handleDebouncedAmountChange(amount);
  }, [amount, handleDebouncedAmountChange]);
  console.log(amount, cartItems);

  return (
    <nav className=''>
      <div className='nav-center'>
        <h3>Max Gear Redux toolkit</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
