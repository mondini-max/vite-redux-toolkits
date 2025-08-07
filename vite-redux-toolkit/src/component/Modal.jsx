import { useDispatch } from 'react-redux';
import { clearCart } from '../store/features/cart/CartSlice.js';
import { closeModal } from '../store/features/modal/ModalSlice.js';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <>
      <aside className='modal-container'>
        <div className='modal'>
          <h4>remove all items from your shopping cart?</h4>
          <div className='btn-container'>
            <button
              type='button'
              className='btn confirm-btn'
              onClick={() => {
                dispatch(clearCart());
                // useDispatch(closeModal());
              }}
            >
              confirm
            </button>
            <button
              type='button'
              className='btn clear-btn'
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              cancel
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Modal;
