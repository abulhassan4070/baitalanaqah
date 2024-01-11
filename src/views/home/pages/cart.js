import React from "react";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Flex,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";
import { apiUrl } from "variables/constants";
import { sendRequestWithToken } from "variables/functions";
import axios from "axios";
import { AddToCard } from "widgets/addToCart";
export default function CartPage() {
  const [cart, setCart] = React.useState([]);
  const { t } = useTranslation();
  const toast = useToast();
  React.useEffect(() => {
    if (localStorage.getItem("userdata") === null) {
    } else {
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
  }, []);
  return (
    <Container maxW={"7xl"} p="12" dir={i18n.dir()}>
      <Breadcrumb
        fontWeight="medium"
        fontSize="sm"
        spacing="8px"
        textTransform="uppercase"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink color="gray.500" style={{ textDecoration: "none" }}>
            <NavLink to="/">{t("home")}</NavLink>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink style={{ textDecoration: "none" }}>
            {t("cart")}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      {cart.map((item) => {
        return (
          <Box
            w="100%"
            bg="white"
            boxShadow="lg"
            rounded="lg"
            p="5"
            overflow="hidden"
            mt="5"
          >
            <Flex>
              <Box>
                <img
                  src={item.product.productImage[0].productImageUrl}
                  alt={item.product.productImage[0].productImageName}
                  width="100px"
                  height="100px"
                />
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Text fontSize="xl" fontWeight="semibold">
                    {item.product.productName}
                  </Text>
                  <Text fontSize="md" fontWeight="semibold">
                    {item.product.productPrice}
                  </Text>
                </Box>
              </Box>
              <Spacer />
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems={"center"}
              >
                <AddToCard id={item.product.productId} />
              </Box>
            </Flex>
          </Box>
        );
      })}
      {cart.length === 0 ? (
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          justifyContent="center"
        >
          <Text>{t("ofCart.text")}</Text>
        </Box>
      ) : (
        <Button
          marginTop={{ base: "1", sm: "5" }}
          colorScheme="red"
          onClick={() => {
            var token = localStorage.getItem("token") || "";
            axios
              .post(
                `${apiUrl()}placeOrder`,
                {
                  userId: JSON.parse(localStorage.getItem("userdata")).userId,
                  totalAmount: cart.reduce(
                    (total, item) => total + item.product.subTotal,
                    0
                  ),
                  currency: "USD",
                  products: cart,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              .then((data) => {
                setCart([]);
                toast({
                  title: "Order Placed",
                  description: "Your order has been placed",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              })
              .catch((err) => {});
          }}
        >
          Checkout
        </Button>
      )}
    </Container>
  );
}
