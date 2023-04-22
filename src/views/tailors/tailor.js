import React from "react";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Image,
  useColorModeValue,
  HStack,
  Center,
  SimpleGrid,
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  Container,
} from "@chakra-ui/react";

import tailor from "../../assets/img/tailor/tailor.png";
import facebook from "../../assets/img/tailor/facebook.png";
import twitter from "../../assets/img/tailor/twitter.png";
import linkedin from "../../assets/img/tailor/linkedin.png";
import instagram from "../../assets/img/tailor/instagram.png";
import { HeaderText } from "widgets/header";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export default function TailorsPage() {
  return (
    <>
      <Container maxW={"7xl"} p="12">
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
              Tailors
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <br />
        <HeaderText
          title="Our Tailors"
          subtitle="See our hardworking tailors"
        />
        <Center>
          <SimpleGrid
            px={6}
            py={12}
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={12}
          >
            <Preface />
            <Tailor />
            <Tailor />
            <Tailor />
            <Tailor />
            <Tailor />
          </SimpleGrid>
        </Center>
      </Container>
    </>
  );
}

function Preface() {
  return (
    <>
      <Box
        maxW={"400px"}
        w={"full"}
        h={"493px"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
        p="32px"
      >
        <HStack>
          <Text
            mt="30px"
            display={"flex"}
            alignItems={"center"}
            textTransform={"uppercase"}
            _after={{
              content: `''`,
              flex: "1",
              ml: "8px",

              width: "16px",
              height: "1px",
              bgColor: "black",
            }}
          >
            Our Tailors
          </Text>
        </HStack>
        <Stack mt={"50px"}>
          <Heading>Meet Our</Heading>
          <Heading>Experienced</Heading>
          <Heading>Tailors</Heading>

          <Box>
            <Box
              display={"inline-block"}
              px="16px"
              py="8px"
              bg={"black"}
              color={"white"}
            >
              Appointment
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

function Tailor() {
  return (
    <Box
      maxW={"400px"}
      w={"full"}
      h={"493px"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Image h={"360px"} w={"full"} src={tailor} objectFit={"cover"} />
      <Flex justify={"center"} mt={-6}>
        <HStack gap={2} bg={"white"} p={2}>
          <Image src={twitter} objectFit={"cover"} />
          <Image src={facebook} objectFit={"cover"} />
          <Image src={linkedin} objectFit={"cover"} />
          <Image src={instagram} objectFit={"cover"} />
        </HStack>
      </Flex>
      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            Mohammad Ismail
          </Heading>
          <Text color={"gray.500"}>Senior Tailor</Text>
        </Stack>
      </Box>
    </Box>
  );
}
