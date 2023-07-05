import React from "react";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";
import { apiUrl } from "variables/constants";
import { sendRequestWithToken } from "variables/functions";
export default function CartPage() {
  const { t } = useTranslation();
  React.useEffect(() => {
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
      .then((data) => {})
      .catch((err) => {
        console.log(err.response);
      });
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
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        justifyContent="center"
      >
        <Text>{t("ofCart.text")}</Text>
      </Box>
    </Container>
  );
}
