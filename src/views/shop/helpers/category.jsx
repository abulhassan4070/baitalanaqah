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

var name;

export default function Category(props) {
  name = props.name;

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

        <BreadcrumbItem>
          <BreadcrumbLink color="gray.500" style={{ textDecoration: "none" }}>
            <NavLink to="/shop">Shop</NavLink>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink style={{ textDecoration: "none" }}>
            <NavLink to={"/shop/" + name}>{name.toUpperCase()}</NavLink>
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
          <CategoryItem name={name} />
          <CategoryItem name={name} />
          <CategoryItem name={name} />
          <CategoryItem name={name} />
          <CategoryItem name={name} />
          <CategoryItem name={name} />
        </SimpleGrid>
      </Center>
    </>
  );
}

function CategoryItem() {
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
              {name.toUpperCase()}
            </Text>
            <Flex justifyContent="flex-end">
              <Icon icon="material-symbols:star-rounded" color={"gold"} />
              <Icon icon="material-symbols:star-rounded" color={"gold"} />
              <Icon icon="material-symbols:star-rounded" color={"gold"} />
              <Icon icon="material-symbols:star-rounded" color={"gold"} />
              <Icon icon="material-symbols:star-rounded" color={"gold"} />
            </Flex>
          </SimpleGrid>
          <Text fontSize="12px">
            Erat ipsum justo amet duo et elitr dolor, est duoErat ipsum justo
            amet duo et elitr dolor, est duo
          </Text>
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
              Add to Cart
            </Box>
            <Box className="buttonStyle small outline" mt="10px">
              Customize
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
}
