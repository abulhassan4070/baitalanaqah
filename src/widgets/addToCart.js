import { Box, Icon, Text, useToast } from "@chakra-ui/react";
import { t } from "i18next";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { apiUrl } from "variables/constants";
import { sendRequestWithToken } from "variables/functions";

export function AddToCard({ id }) {
  const toast = useToast();
  const [cartProduct, setCartProduct] = React.useState(null);
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
        var isCart = false;
        for (var i = 0; i < data.data.cart.length; i++) {
          if (data.data.cart[i].product.productId === id) {
            isCart = true;
            setCartProduct(data.data.cart[i]);
          }
        }
        if (!isCart) {
          setCartProduct(null);
        }
      })
      .catch((err) => {});
  }
  function removeCartDatas() {
    var userData = JSON.parse(localStorage.getItem("userdata")).userId;
    var token = localStorage.getItem("token") || "";
    sendRequestWithToken(
      {
        userId: userData,
        productId: id,
      },
      `${apiUrl()}removeFromCart`,
      "POST",
      token
    )
      .then((data) => {
        getCartDatas();
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
        productId: id,
      },
      `${apiUrl()}addToCart`,
      "POST",
      token
    )
      .then((data) => {
        getCartDatas();
        console.log(data.data.cart);
      })
      .catch((err) => {});
  }
  React.useEffect(() => {
    if (localStorage.getItem("userdata") === null) {
    } else {
      getCartDatas();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return cartProduct ? (
    <Box
      textTransform={"uppercase"}
      style={{
        border: "1px solid #e2e2e2",
        borderRadius: "5px",
        overflow: "hidden",
        cursor: "pointer",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Box
        p={2}
        onClick={() => {
          removeCartDatas();
          toast({
            title: "Removed from cart",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }}
        style={{
          cursor: "pointer",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Icon as={FaMinus} />
      </Box>
      <Text p={2} fontWeight="bold">
        {cartProduct.qty}
      </Text>
      <Box
        p={2}
        style={{
          cursor: "pointer",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
        onClick={() => {
          addCartDatas();
          toast({
            title: "Added to cart",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }}
      >
        <Icon as={FaPlus} />
      </Box>
    </Box>
  ) : (
    <Box
      textTransform={"uppercase"}
      className="buttonStyle"
      onClick={() => {
        addCartDatas();
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
