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

  useEffect(() => {
    const cartData = JSON.parse(sessionStorage.getItem("Cart"));
    if (cartData) {
      setCartProducts(cartData);
    } else {
      sessionStorage.setItem("Cart", JSON.stringify([]));
    }
  }, []);

  function updateCart(newCart) {
    sessionStorage.setItem(
      "Cart",
      JSON.stringify([...cartProducts, ...newCart]),
    );
    setCartProducts(JSON.parse(sessionStorage.getItem("Cart")));
  }

  function deleteCartItem(id) {
    const cartData = JSON.parse(sessionStorage.getItem("Cart"));
    sessionStorage.setItem(
      "Cart",
      JSON.stringify(cartData.filter((c) => c.cartId !== id)),
    );
    setCartProducts(JSON.parse(sessionStorage.getItem("Cart")));
  }

  function getFreeCartId() {
    const cartData = JSON.parse(sessionStorage.getItem("Cart"));
    const takenId = [];
    let freeId = "";
    for (const item of cartData) {
      takenId.push(item.cartId);
    }
    for (let i = 0; i < 500; i++) {
      if (!takenId.includes(i)) {
        freeId = i;
        break;
      }
    }

    return freeId;
  }

  return (
    <>
      <CartContext.Provider
        value={{ cartProducts, updateCart, deleteCartItem, getFreeCartId }}
      >
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
