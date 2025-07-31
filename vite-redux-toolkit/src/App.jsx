import { Fragment } from 'react';
import Navbar from './component/Navbar.jsx';
import { CartContainer } from './component/CartContainer.jsx';

function App() {
  return (
    <Fragment>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </Fragment>
  );
}
export default App;
