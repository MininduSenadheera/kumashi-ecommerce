import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Pages/Products/Products';
import Cart from './Pages/Cart/Cart';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" exact element={<Checkout/>} />
          <Route path="/products/:category" exact element={<Products/>} />
          <Route path="/single_product" exact element={<SingleProduct />} />
          <Route path="/cart" exact element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
