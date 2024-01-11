import { Box, useToast } from "@chakra-ui/react";
import { t } from "i18next";
import React from "react";
import { apiUrl } from "variables/constants";
import { sendRequestWithToken } from "variables/functions";
import { addToCardRequest } from "variables/functions";

export function AddToCard({ id }) {
  const toast = useToast();
  const [cart, setCart] = React.useState([]);

  function getCartDatas() {
    var userData = JSON.parse(localStorage.getItem("userdata")).userId;
    var token = localStorage.getItem("token") || "";
    sendRequestWithToken(
      {
        userId: userData,
      },
      `${apiUrl()}getCart`,
      "POST",
      token
    )
      .then((data) => {
        setCart(data.data.cart);
        console.log(data.data.cart);
      })
      .catch((err) => {});
  }
  function removeCartDatas() {
    var userData = JSON.parse(localStorage.getItem("userdata")).userId;
    var token = localStorage.getItem("token") || "";
    sendRequestWithToken(
      {
        userId: userData,
      },
      `${apiUrl()}removeFromCart`,
      "POST",
      token
    )
      .then((data) => {
        setCart(data.data.cart);
        console.log(data.data.cart);
      })
      .catch((err) => {});
  }
  function addCartDatas() {
    var userData = JSON.parse(localStorage.getItem("userdata")).userId;
    var token = localStorage.getItem("token") || "";
    sendRequestWithToken(
      {
        userId: userData,
      },
      `${apiUrl()}addToCart`,
      "POST",
      token
    )
      .then((data) => {
        setCart(data.data.cart);
        console.log(data.data.cart);
      })
      .catch((err) => {});
  }
  function checkIfExist() {
    // eslint-disable-next-line array-callback-return
    cart.map((item) => {
      if (item.productId === id) {
        return true;
      }
    });
    return false;
  }
  React.useEffect(() => {
    if (localStorage.getItem("userdata") === null) {
    } else {
      getCartDatas();
    }
  }, []);

  return (
    <Box
      textTransform={"uppercase"}
      className="buttonStyle"
      onClick={() => {
        addToCardRequest(id, 1);
        toast({
          title: "Added to cart",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }}
    >
      {t("addToCart")}
    </Box>
  );
}
