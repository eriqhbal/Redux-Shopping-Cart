import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

// redux
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const cartItem = useSelector((state) => state.cart.itemsList);
    console.log(cartItem);
  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}

      {/* <Layout /> */}
    </div>
  );
}

export default App;
