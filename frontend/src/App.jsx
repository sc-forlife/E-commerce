import { useState, useEffect } from "react";
import { createContext } from "react";
import Home from "./pages/home/Home";
import ProductImage from "./components/ProductImage/ProductImage"; // Testing Component
import ProductDescription from "./components/ProductPricingDetails/ProductPricingDetails"; //Testing Component
import ProductDetails from "./components/ProductExtraData/ProductExtraData";
import ViewProduct from "./pages/ViewProduct/ViewProduct";
import Checkout from "./pages/checkout_sys/Checkout_sys";
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

  function editCart(cartItem) {
    if (inCart(cartItem.id)) {
      const cartData = JSON.parse(sessionStorage.getItem("Cart"));
      const newCart = cartData.filter((c) => c.id !== cartItem.id);
      sessionStorage.setItem("Cart", JSON.stringify([...newCart, cartItem]));
    }
  }

  function updateCart(newCart) {
    sessionStorage.setItem("Cart", JSON.stringify(newCart));
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

  function inCart(id) {
    const cartData = JSON.parse(sessionStorage.getItem("Cart"));
    for (const item of cartData) {
      if (item.id === id) {
        return true;
      }
    }
    return false;
  }

  return (
    <>
      <CartContext.Provider
        value={{
          cartProducts,
          updateCart,
          deleteCartItem,
          getFreeCartId,
          inCart,
          editCart,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/" element={<Home />} />
            <Route path="/ViewProduct/:productId" element={<ViewProduct />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}
