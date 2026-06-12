import { useState, useEffect } from "react";
import { createContext } from "react";
import Home from "./pages/home/Home";
import ProductImage from "./components/ProductImage/ProductImage"; // Testing Component
import ProductDescription from "./components/ProductPricingDetails/ProductPricingDetails"; //Testing Component
import ProductDetails from "./components/ProductExtraData/ProductExtraData";
import Cart from "./pages/cart/Cart";
import ViewProduct from "./pages/ViewProduct/ViewProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const CartContext = createContext();

export default function App() {
  const [cartProducts, setCartProducts] = useState([]);
  console.log(cartProducts, "Cart");
  return (
    <>
      <CartContext.Provider value={{ cartProducts, setCartProducts }}>
        <BrowserRouter>
          <Routes>
            <Route path="/Cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
            <Route path="/ViewProduct/:productId" element={<ViewProduct />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}
