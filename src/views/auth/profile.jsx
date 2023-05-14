import React from "react";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Container,
  Heading,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";

export default function Profile(props) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  React.useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);
  return (
    <Container maxW={"7xl"} mt="20px" p={10} bg="white" dir={i18n.dir()}>
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
        <BreadcrumbItem>
          <BreadcrumbLink color="gray.500" style={{ textDecoration: "none" }}>
            <NavLink to="/profile">Profile</NavLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Center>
        <Heading fontSize={"4xl"}>Profile</Heading>
        <br />
        <br />
        <Box
          className="buttonStyle small"
          mb="0px"
          style={{
            marginBottom: "0px",
          }}
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("userdata");
            window.location = "/";
          }}
        >
          Logout
        </Box>
      </Center>
    </Container>
  );
}
