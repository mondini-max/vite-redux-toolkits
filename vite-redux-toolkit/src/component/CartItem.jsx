import { useDispatch } from 'react-redux';
import { ChevronDown, ChevronUp } from '../icons.jsx';
import {
  removeItem,
  increaseAmount,
} from '../store/features/cart/CartSlice.js';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <>
      <article className='cart-item'>
        <img src={img} alt={title} />
        <div>
          <h4>{title}</h4>
          <h4 className='item-price'>${price}</h4>
          <button
            className='remove-btn'
            onClick={() => dispatch(removeItem(id))}
          >
            remove
          </button>
        </div>
        <div>
          <button
            className='amount-btn'
            onClick={() => dispatch(increaseAmount(id))}
          >
            <ChevronUp />
          </button>
          <p className='amount'>{amount}</p>
          <button className='amount-btn'>
            <ChevronDown />
          </button>
        </div>
      </article>
    </>
  );
};

export default CartItem;
