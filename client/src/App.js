import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Pages/Products/Products';
import Cart from './Pages/Cart/Cart';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Checkout from './Pages/Checkout/Checkout';
import ProductReport from './Pages/Report/ProductReport';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout/:cartId" exact element={<Checkout/>} />
          <Route path="/products/:category" exact element={<Products/>} />
          <Route path="/product/:id" exact element={<SingleProduct />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/product_report" exact element={<ProductReport/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
