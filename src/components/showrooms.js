import React from "react";
import {
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
  Flex,
  Center,
  Heading,
} from "@chakra-ui/react";

import { ArrowForwardIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "../assets/css/components.css";

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

const ShowroomsList = (props) => {
  return (
    <Flex mt="10px" wrap={"wrap"} py="20px" justify="space-between" gap="2">
      {props.cities.map((cityObj) => {
        return (
          <Box
            key={cityObj.city}
            w="300px"
            h="wrap"
            px="20px"
            py="10px"
            mt="30px"
            boxShadow="lg"
            rounded="md"
            _hover={{ boxShadow: "md" }}
          >
            <Link style={{ textDecoration: "none" }}>
              <Text pt="5px">{cityObj.city}</Text>
              <Text pt="5px" color="gray.500">
                {cityObj.street}
              </Text>
              <Text color="gray.500">{cityObj.state}</Text>
              <Box mt="10px"></Box>
              <Box width="fit-content" className="content">
                <Box className="outer borderLeftRight" mt="-5px"></Box>
                <Box
                  width="fit-content"
                  className="innerContent borderLeftRight"
                  bg="black"
                >
                  <Text
                    p="10px 25px 10px 25px"
                    color="white"
                    textTransform="uppercase"
                  >
                    Book Now <ArrowForwardIcon />
                  </Text>
                </Box>
                <Box className="outer borderLeftRight" mb="-5px"></Box>
              </Box>
            </Link>
          </Box>
        );
      })}
    </Flex>
  );
};

const Showrooms = () => {
  return (
    <Center p="20px" border="4px" m="10px">
      <Box mt="20px">
        <Breadcrumb
          fontWeight="medium"
          fontSize="sm"
          spacing="8px"
          textTransform="uppercase"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink
              color="gray.500"
              style={{ textDecoration: "none" }}
              href="/"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              style={{ textDecoration: "none" }}
              href="/showrooms"
            >
              Showrooms
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box mt="20px">
          <Heading>
            Visit A <br />
            Showroom
          </Heading>
          <Text mt="20px">By Appointment Only</Text>
          <Text mt="20px">
            Your dedicated Enzo Clothier will take over 30 measurements and
            guide you in selecting the right fabrics and customizations that
            best complement your personal style. Please expect your custom
            garments within four weeks.
          </Text>
          <ShowroomsList cities={cities} />
        </Box>
      </Box>
    </Center>
  );
};

export default Showrooms;
