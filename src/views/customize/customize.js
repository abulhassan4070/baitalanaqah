import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HeaderText } from "widgets/header";

export default function CustomizePage() {
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
              Customize
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <br />
        <HeaderText title="Customize" subtitle="Customizing suits" />
      </Container>
      <Container maxW={"container.xl"} p={0}>
        <Flex h={"100vh"} p={2}>
          <VStack
            w="full"
            h="full"
            p={10}
            spacing={10}
            alignItems={"flex-start"}
            bg={"gray.200"}
          ></VStack>
          <VStack
            w="full"
            h="full"
            p={10}
            spacing={10}
            alignItems={"flex-start"}
            bg={"gray.600"}
          ></VStack>
        </Flex>
      </Container>
    </>
  );
}
