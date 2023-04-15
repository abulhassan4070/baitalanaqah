import React from "react";
import {
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Container,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

import { NavLink } from "react-router-dom";
import ShowroomsList from "./showroomlist";

const cities = [
  {
    city: "NYC Midtown",
    street: "315 Madison Avenue 14th Floor",
    state: "New York NY 10017",
  },
  {
    city: "Chicago",
    street: "67 E Oak Street Suite 3E",
    state: "Chicago IL 60611",
  },
  {
    city: "Beverly Hills",
    street: "150 S Rodeo Drive Suite 150",
    state: "Beverly Hills CA 90212",
  },
  {
    city: "Washington DC",
    street: "1001 Connecticut Avenue NW Suite 1110",
    state: "Washington DC 20036",
  },
  {
    city: "Philadelphia",
    street: "1528 Walnut Street Suite 1401",
    state: "Philadelphia PA 19102",
  },
  {
    city: "Charlotte",
    street: "201 S College Street Suite 2255",
    state: "Charlotte NC 28244",
  },
  {
    city: "Miami",
    street: "800 Brickell Avenue Suite 102",
    state: "Miami FL 33131",
  },
];
const Showrooms = () => {
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
            Showrooms
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box mt="20px">
        <Heading>Visit A Showroom</Heading>
        <Text mt="20px">By Appointment Only</Text>
        <Text mt="10px">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do
        </Text>
        <br />
        <ShowroomsList cities={cities} button={true} />
      </Box>
    </Container>
  );
};

export default Showrooms;
