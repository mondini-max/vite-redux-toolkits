import { CartIcon, ShopIcon } from '../icons.jsx';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // console.log(useSelector((store) => console.log(store)));
  const { amount } = useSelector((store) => store.cart);
  console.log(amount);

  return (
    <nav className=''>
      <div className='nav-center'>
        <ShopIcon />
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
