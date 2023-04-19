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

export default function ShopPage() {
  var categories = [
    {
      image:
        "https://images.unsplash.com/photo-1609840170480-4c440bcd5d8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",

      title: "SUITS",
    },
    {
      image:
        "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",

      title: "SHIRTS",
    },
    {
      image:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",

      title: "TROUSERS",
    },
    {
      image:
        "https://images.unsplash.com/photo-1604006852748-903fccbc4019?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",

      title: "POLO",
    },
    {
      image:
        "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",

      title: "TSHIRTS",
    },
  ];
  const customizeImgUrl =
    "https://images.prismic.io/enzo/5a8b3909-9f81-4b46-a70d-907b1446f096_25557_J1.jpeg?auto=compress,format";

  return (
    <Container maxW={"7xl"} mt="20px" p={10} bg="white">
      <Breadcrumb
        fontWeight="medium"
        fontSize="sm"
        spacing="8px"
        textTransform="uppercase"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink color="gray.500" style={{ textDecoration: "none" }}>
            <NavLink to="/">Home</NavLink>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink style={{ textDecoration: "none" }}>
            SHop
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
            <div className="shopbycategory">
              <Box height="100%">
                <Image
                  src={category.image}
                  height="100%"
                  width="100%"
                  objectFit="cover"
                />
              </Box>
              <Center>
                <h3 style={{ color: "black", fontSize: "20px" }}>
                  {category.title}
                </h3>
              </Center>
              <br />
            </div>
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
        <VStack mx="40px" justifyContent={"center"} gridArea="left">
          <Heading pt="20px">Customize</Heading>
          <Text p="10px 40px 10px" textAlign={"center"}>
            All of our garments are custom-made for each client. Select from
            over 5,000 fabrics and 1,562 complimentary style and design options
            to create a wardrobe that is truly customized to you.
          </Text>
          <Link to="/customize">
            <Box className="buttonStyle" mt="10px">
              Customize
            </Box>
          </Link>
        </VStack>
        <Box gridArea="right">
          <img
            src={customizeImgUrl}
            alt="customize"
            height={{
              base: "200px",
              sm: "300px",
              md: "400px",
            }}
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
}
