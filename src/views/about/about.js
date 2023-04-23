import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HeaderText } from "widgets/header";

export default function AboutPage() {
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
              About Us
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <br />
        <HeaderText title="About Us" subtitle="The story of our brand" />
      </Container>
    </>
  );
}
