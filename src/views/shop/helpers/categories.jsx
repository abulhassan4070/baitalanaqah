import React from "react";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  SimpleGrid,
  Text,
  VStack,
  Heading,
  Image,
  Center,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import abayaImage from "../../../assets/img/shop/abaya.jpeg";
import blazersImage from "../../../assets/img/shop/blazers.jpeg";
import poloImage from "../../../assets/img/shop/polo.jpeg";
import shirtsImage from "../../../assets/img/shop/shirts.jpeg";
import suitsImage from "../../../assets/img/shop/suits.jpeg";
import trousersImage from "../../../assets/img/shop/trousers.jpeg";
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";

export default function ShopCategories() {
  const { t } = useTranslation();
  var categories = [
    {
      image: abayaImage,
      title: "ABAYA",
    },
    {
      image: suitsImage,
      title: "SUITS",
    },
    {
      image: shirtsImage,
      title: "SHIRTS",
    },
    {
      image: trousersImage,
      title: "TROUSERS",
    },
    {
      image: blazersImage,
      title: "BLAZERS",
    },
    {
      image: poloImage,
      title: "POLO",
    },
  ];
  const customizeImgUrl =
    "https://images.prismic.io/enzo/5a8b3909-9f81-4b46-a70d-907b1446f096_25557_J1.jpeg?auto=compress,format";

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
      <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          md: 3,
        }}
        spacing={4}
      >
        {categories.map((category) => (
          <Box>
            <Link
              className="shopbycategory"
              to={`/shop/${category.title.toLowerCase()}`}
            >
              <Box height="300px" width="100%" overflow={"hidden"}>
                <Image
                  src={category.image}
                  height="100%"
                  width="100%"
                  transitionDuration={"0.5s"}
                  _hover={{
                    opacity: "0.7",
                    transform: "scale(1.1)",
                  }}
                  objectFit="cover"
                />
              </Box>
              <Center>
                <h3 style={{ color: "black", fontSize: "20px" }}>
                  {t("ofShop." + category.title.toLowerCase()).toUpperCase()}
                </h3>
              </Center>
              <br />
            </Link>
          </Box>
        ))}
      </SimpleGrid>
      <SimpleGrid
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
        }}
        gridTemplateRows={{
          base: "auto",
          md: "auto",
        }}
        gridTemplateAreas={{
          base: `'right' 'left'`,
          md: `'left right'`,
        }}
        spacing={4}
        mt="40px"
        border={"1px"}
      >
        <VStack mx="20px" justifyContent={"center"} gridArea="left">
          <Heading pt="20px">{t("customize")}</Heading>
          <Text textAlign={"center"}>{t("ofShop.customizeText")}</Text>
          <Link to="/customize">
            <Box className="buttonStyle" mt="10px">
              {t("customize")}
            </Box>
          </Link>
        </VStack>
        <Box gridArea="right">
          <img src={customizeImgUrl} alt="customize" />
        </Box>
      </SimpleGrid>
    </Container>
  );
}
