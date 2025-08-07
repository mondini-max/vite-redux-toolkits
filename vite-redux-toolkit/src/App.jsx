import { Fragment } from 'react';
import Navbar from './component/Navbar.jsx';
import { CartContainer } from './component/CartContainer.jsx';
import Modal from './component/Modal.jsx';

function App() {
  return (
    <Fragment>
      <main>
        <Modal />
        <Navbar />
        <CartContainer />
      </main>
    </Fragment>
  );
}
export default App;
