import Header from './components/Header/Header'
import ProductDetail from './components/Product/ProductDetail';
import Store from './pages/Store';
import About from './pages/About';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import {Routes, Route} from "react-router-dom"
import './style.css'

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Store/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/wishlist" element={<Wishlist/>}/>
                <Route path="/product/:productId" element={<ProductDetail/>}/>
            </Routes>

        </div>
    );
}

export default App;
