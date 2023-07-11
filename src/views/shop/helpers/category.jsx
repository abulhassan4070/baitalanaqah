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
  useToast,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";
import axios from "axios";
import { apiUrl } from "variables/constants";
import { addToCardRequest } from "variables/functions";

export default function Category(props) {
  var url = window.location.href;
  var id = url.substring(url.lastIndexOf("/") + 1);
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
            <NavLink to={"/shop/" + id}>
              <LoadTitle id={id} />
            </NavLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <br />
      <CategoryList id={id} />
    </Container>
  );
}

function LoadTitle(props) {
  var categories = localStorage.getItem("categories");
  categories = JSON.parse(categories);
  for (var i = 0; i < categories.length; i++) {
    console.log(categories[i].categoryId);
    console.log(props.id);
    if (categories[i].categoryId === props.id) {
      return <Text>{categories[i].categoryName}</Text>;
    }
  }
}

function CategoryList(props) {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`${apiUrl()}getAllProductsByCategories/${props.id}`)
      .then((response) => {
        localStorage.setItem(
          "categoriesdata" + props.id,
          JSON.stringify(response.data)
        );
        console.log(response.data);
        setProducts(response.data);
      });
  }, [props.id]);
  return (
    <>
      <Center>
        <SimpleGrid
          px={6}
          py={12}
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={12}
        >
          {products.map((product) => (
            <CategoryItem key={product.productId} product={product} />
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
}

function CategoryItem(props) {
  const { t } = useTranslation();
  const toast = useToast();
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
        <Link
          to={`/products/${props.product.productId}`}
          state={{ name: props.product.productName }}
        >
          <Box height="100%" width="100%">
            <Image
              src={props.product.productImages[0].productImageUrl}
              height="100%"
              width="100%"
              objectFit="cover"
            />
          </Box>
        </Link>
        <Box p={2} width="100%">
          <Text
            style={{
              color: "black",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {props.product.productName}
          </Text>
          <Flex justifyContent="flex-start">
            <Icon icon="material-symbols:star-rounded" color={"gold"} />
            <Icon icon="material-symbols:star-rounded" color={"gold"} />
            <Icon icon="material-symbols:star-rounded" color={"gold"} />
            <Icon icon="material-symbols:star-rounded" color={"gold"} />
            <Icon icon="material-symbols:star-rounded" color={"gold"} />
          </Flex>
          <Text fontSize="12px">{props.product.productDescription}</Text>
          <Box
            className="buttonStyle small"
            mt="10px"
            onClick={() => {
              addToCardRequest(props.product.productId, 1);
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
        </Box>
      </VStack>
    </Box>
  );
}
