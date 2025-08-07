import { Fragment } from 'react';
import Navbar from './component/Navbar.jsx';
import { CartContainer } from './component/CartContainer.jsx';
import Modal from './component/Modal.jsx';
import { useSelector } from 'react-redux';

function App() {
  const { isOpen } = useSelector((store) => store.modal);
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
