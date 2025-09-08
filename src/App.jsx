import Header from "./components/Layout/Header";
import './App.css';
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart.jsx';
import CartContext from './context/cart-context.js';
import CartProvider from "./context/CartProvider.jsx";
import {useContext} from "react";
import MainCart from "./components/Layout/MainCart.jsx";

const App = () => {

  const x = useContext(CartContext)

  return <>
    {/* value속성에 하위컴포넌트들이 공유할 상태값들을 명시 */}
    <CartProvider>
      <MainCart />
    </CartProvider>
  </>;
};

export default App;