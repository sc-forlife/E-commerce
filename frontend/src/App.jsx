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
  const [cartProducts, setCartProducts] = useState([]); //This is the main storage

  useEffect(() => {
    const cartData = JSON.parse(sessionStorage.getItem("Cart"));
    if (cartProducts.length >= 1) {
      sessionStorage.setItem("Cart", JSON.stringify(cartProducts)); //update DB
    } else if (cartData) {
      cartData.length ? setCartProducts(cartData) : null; //update main storage
    } else {
      sessionStorage.setItem("Cart", JSON.stringify([])); //Set up DB
    }
  }, [cartProducts]);

  //passing item , find index of passed item and replace it in the cart
  function editCart(cartItem) {
    if (inCart(cartItem.id)) {
      // const cartData = JSON.parse(sessionStorage.getItem("Cart")); MAKE CHANGES USE STATE
      const newCart = cartProducts.filter((c) => c.id !== cartItem.id);
      setCartProducts([...newCart, cartItem]);
    }
  }

  function addCart(item) {
    setCartProducts((i) => [item, ...i]);
  }

  //filter item out from the cart
  function deleteCartItem(id) {
    // const cartData = JSON.parse(sessionStorage.getItem("Cart"));   MAKE CHANGES USE STATE
    const newCart = cartProducts.filter((c) => c.cartId !== id);
    setCartProducts(newCart);
  }

  function clearCart() {
    setCartProducts([]);
  }

  function getFreeCartId() {
    // const cartData = JSON.parse(sessionStorage.getItem("Cart")); MAKE CHANGES USE STATE

    //What happens when cart is empty
    const takenId = [];
    let freeId = "";
    for (const item of cartProducts) {
      takenId.push(item.cartId);
    }
    //Loop through all cart IDs to find non-allocated one
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
          addCart,
          deleteCartItem,
          getFreeCartId,
          inCart,
          editCart,
          clearCart,
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
