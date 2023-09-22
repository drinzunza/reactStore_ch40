import './App.css';
import About from './components/about';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import Cart from './pages/cart';
import Admin from './pages/admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

// TEST CHANGE
export default App;


/**
 * - create the component (jsx, css)
 * - register a route on app.js
 * - create a menu item on navbar
 * 
 */