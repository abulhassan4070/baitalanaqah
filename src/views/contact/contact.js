import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  SimpleGrid,
  Stack,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import { MdEmail, MdPhone, MdLocationPin, MdAccessTime } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { paigeColor } from "variables/constants";
import { HeaderText } from "widgets/header";

export default function Contact() {
  return (
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
            Contact
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <br/>
      <HeaderText
        title="Contact Us"
        subtitle="We are always ready to help you"
      />
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} p={5}>
        <SimpleGrid columns={{ base: 2, md: 2 }} gap={5}>
          <Stack bgColor={paigeColor} p={5}>
            <Box as={MdLocationPin} size="40px" />
            <Text fontWeight={"bold"} fontSize={18}>
              Address
            </Text>
            <Text fontSize={12}>SPK College</Text>
            <Text fontSize={12}>Alwarkurichi, Tenkasi</Text>
          </Stack>
          <Stack bgColor={paigeColor} p={5}>
            <Box as={MdPhone} size="40px" />
            <Text fontWeight={"bold"} fontSize={18}>
              Call Us
            </Text>
            <Text fontSize={12}>+91 6382775774</Text>
          </Stack>
          <Stack bgColor={paigeColor} p={5}>
            <Box as={MdEmail} size="40px" />
            <Text fontWeight={"bold"} fontSize={18}>
              Email Us
            </Text>
            <Text fontSize={12}>lakshmanan.coder@gmail.com</Text>
            <Text fontSize={12}>klakshmanan48@gmail.com</Text>
          </Stack>
          <Stack bgColor={paigeColor} p={5}>
            <Box as={MdAccessTime} size="40px" />
            <Text fontWeight={"bold"} fontSize={18}>
              Open Hours
            </Text>
            <Text fontSize={12}>Monday - Friday</Text>
            <Text fontSize={12}>10.00AM - 4.00PM</Text>
          </Stack>
        </SimpleGrid>
        <Box>
          <iframe
            height="100%"
            width="100%"
            title="contact_map"
            src="https://www.google.com/maps/embed/v1/place?q=SRI+PARAMAKALYANI+COLLEGE,+Main+Road,+Alwarkurichi,+Tamil+Nadu,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
}
