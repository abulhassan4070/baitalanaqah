import React from "react";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";

var name;

export default function Category(props) {
  name = props.name;
  const { t } = useTranslation();

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
            <NavLink to="/shop">{t("shop")}</NavLink>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink style={{ textDecoration: "none" }}>
            <NavLink to={"/shop/" + name}>
              {t("ofShop." + name).toUpperCase()}
            </NavLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <br />
      <CategoryList />
    </Container>
  );
}

function CategoryList() {
  return (
    <>
      <Center>
        <SimpleGrid
          px={6}
          py={12}
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={12}
        >
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </SimpleGrid>
      </Center>
    </>
  );
}

function CategoryItem() {
  const { t } = useTranslation();
  return (
    <Box
      height="100%"
      width="100%"
      style={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        backgroundColor: "white",
      }}
    >
      <VStack>
        <Link to={`/products/${name}`} state={{ name: name }}>
          <Box height="100%" width="100%">
            <Image
              src={require(`../../../assets/img/shop/${name}.jpeg`)}
              height="100%"
              width="100%"
              objectFit="cover"
            />
          </Box>
        </Link>

        <Box p={2}>
          <SimpleGrid
            columns={{
              base: 2,
              md: 2,
            }}
            spacing={{
              base: 0,
              md: 2,
            }}
            justifyContent={"space-between"}
          >
            <Text
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {t("ofShop." + name).toUpperCase()}
            </Text>
            <Flex justifyContent="flex-end">
              <Icon icon="material-symbols:star-rounded" color={"gold"} />
              <Icon icon="material-symbols:star-rounded" color={"gold"} />
              <Icon icon="material-symbols:star-rounded" color={"gold"} />
              <Icon icon="material-symbols:star-rounded" color={"gold"} />
              <Icon icon="material-symbols:star-rounded" color={"gold"} />
            </Flex>
          </SimpleGrid>
          <Text fontSize="12px">{t("category.text")}</Text>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
            }}
            spacing={{
              base: 0,
              md: 2,
            }}
          >
            <Box className="buttonStyle small" mt="10px">
              {t("addToCart")}
            </Box>
            <Box className="buttonStyle small outline" mt="10px">
              {t("buyNow")}
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
}
