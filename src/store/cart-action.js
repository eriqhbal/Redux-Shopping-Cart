import { cartActions } from "./cart-slice";
import { uiAction } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        `https://redux-shoppingcart-fca40-default-rtdb.firebaseio.com/cartItems.json`
      );
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      dispatch(
        uiAction.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        open: true,
        message: "Sending Request",
        type: "warning",
      })
    );

    const sendRequest = async () => {
      // send state as sending request

      const res = await fetch(
        `https://redux-shoppingcart-fca40-default-rtdb.firebaseio.com/cartItems.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            cart,
          }),
        }
      );
      const data = await res.json();
      // send state as request is successful
      dispatch(
        uiAction.showNotification({
          open: true,
          message: "Send Request To Database Successfully",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();
    } catch (err) {
      sendRequest().catch((err) => {
        // send state as Error
        dispatch(
          uiAction.showNotification({
            open: true,
            message: "Sending Request Failed",
            type: "error",
          })
        );
      });
    }
  };
};
