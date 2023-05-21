import axios from "axios";
import { TYPE } from "../utils/constants";
import { toast } from "react-toastify";

export const addToCart = async (dataDispatch, product, token) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );

    toast.success("Added To Cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    dataDispatch({ type: TYPE.ADD_TO_CART, payload: response.data.cart });
  } catch (error) {
    console.log("Error in addToCart", error);
  }
};

export const removeFromCart = async (
  dataDispatch,
  productId,
  token,
  isClearing
) => {
  try {
    const response = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: token,
      },
    });

    if (!isClearing) {
      toast.warn("Removed From Cart", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    console.log(response.data.cart);

    dataDispatch({ type: TYPE.REMOVE_FROM_CART, payload: response.data.cart });
  } catch (error) {
    console.log("Error in removeFromCart", error);
  }
};

export const updateQtyInCart = async (
  dataDispatch,
  productId,
  token,
  actionType
) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${productId}`,
      {
        action: {
          type: actionType === "INCREMENT" ? "increment" : "decrement",
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );

    console.log(response.data.cart);

    dataDispatch({
      type: TYPE.UPDATE_QTY_IN_CART,
      payload: response.data.cart,
    });
  } catch (error) {
    console.log("Error in updateQtyInCart", error);
  }
};
