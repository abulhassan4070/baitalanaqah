import React from "react";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";
import axios from "axios";
import { apiUrl } from "variables/constants";
import ListOfProducts from "components/abaya";

export default function ShopCategoryType() {
  const [id, setId] = React.useState("");
  var location = useLocation();
  React.useEffect(() => {
    // setId(location.pathname.split("/")[2]);
    // var url = window.location.href;
    // var id = url.substring(url.lastIndexOf("/") + 1);
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf("/") + 1);
    setId(id);
  }, [location]);

  const { t } = useTranslation();

  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${apiUrl()}getProductCategories`).then((response) => {
      localStorage.setItem("categories", JSON.stringify(response.data));
      console.log(response.data);
      setCategories(response.data);
    });
  }, []);

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

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink style={{ textDecoration: "none" }}>
            {t("shop")}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <br />
      <br />
      {/* <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          md: 3,
        }}
        spacing={4}
      > */}
      {categories.map((category) =>
        category.categoryName.startsWith(id) ? (
          <Box>
            <ListOfProducts
              id={category.categoryId}
              name={category.categoryName.replaceAll(id, "").toUpperCase()}
            />
          </Box>
        ) : (
          <></>
        )
      )}
      {/* </SimpleGrid> */}
    </Container>
  );
}
