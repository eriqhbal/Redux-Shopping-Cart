import React, { useEffect } from "react";
import "./App.css";

// Component
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";

// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchData, sendCartData } from "./store/cart-action";
let isFirstRender = true;
function App() {
  // Dispatch
  const dispatch = useDispatch();

  // useSelector Hooks
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}

      {/* <Layout /> */}
    </div>
  );
}

export default App;
