import { Fragment, useEffect } from 'react';
import Navbar from './component/Navbar.jsx';
import { CartContainer } from './component/CartContainer.jsx';
import Modal from './component/Modal.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { getCartItems } from './store/features/cart/CartSlice.js';

function App() {
  const { isOpen } = useSelector((store) => store.modal);
  const { isLoading, cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Fragment>
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
      </Fragment>
    );
  } else
    return (
      <Fragment>
        <main>
          {isOpen && <Modal />}
          <Navbar />
          <CartContainer />
        </main>
      </Fragment>
    );
}
export default App;
