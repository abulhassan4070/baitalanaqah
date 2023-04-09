import React from "react";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export default function ShopPage() {
  var categories = [
    {
      image:
        "https://images.prismic.io/enzo/e1a428a6-9b22-487b-8395-584388e723f3_Full+Tux_2202_NW_Grey_C2.jpg?auto=compress,format",

      title: "SUITS",
    },
    {
      image:
        "https://images.prismic.io/enzo/ff82ee27-8764-43a0-bed3-d726c2d1bd0f_Jacket+1817.jpg?auto=compress,format",

      title: "TUXEDOS",
    },
    {
      image:
        "https://images.prismic.io/enzo/c4bdbd61-d479-418d-9a0b-1045f5f8dd7e_Long+Sleeve+Shirt_1901_NW_Grey_C2.jpg?auto=compress,format",

      title: "JACKETS",
    },
    {
      image:
        "https://images.prismic.io/enzo/03042526-7b3b-4c20-95b3-76b7b20df996_trousers.jpg?auto=compress,format",

      title: "SHIRTS",
    },
    {
      image:
        "https://images.prismic.io/enzo/14f28091-a537-45ed-acbd-8a44560c356e_Waistcoat+1430.jpg?auto=compress,format",

      title: "TROUSERS",
    },
    {
      image:
        "https://images.prismic.io/enzo/f2067f63-fd44-4a2c-8ef2-5e1adae66906_Overcoat_1281_NW_Grey_C2.jpg?auto=compress,format",

      title: "WAISTCOATS",
    },
    {
      image:
        "https://images.prismic.io/enzo/f1920740-1310-4fd4-823a-06721d98532a_Bomber+Jacket_2327_NW_Grey_C2.jpg?auto=compress,format",

      title: "OVERCOATS",
    },
    {
      image:
        "https://images.prismic.io/enzo/43619028-6d7b-4504-8d06-2271d03587dc_HuntingJacket_1774_NW_Grey_C2.jpg?auto=compress,format",

      title: "BOMBERS",
    },
    {
      image:
        "https://images.prismic.io/enzo/ec9101dc-ffe7-452e-a024-5f53458636b7_Accessories_Suit_Tie+1215.jpg?auto=compress,format",

      title: "TRENCH COATS",
    },
    {
      image:
        "https://images.prismic.io/enzo/edea02fc-045f-4b56-a6bc-6c9c9bdec9a2_Wedding+Accessories_Black+Satin+Bowtie+T200_3.jpg?auto=compress,format",

      title: "ACCESSORIES",
    },
    {
      image:
        "https://images.prismic.io/enzo/76fead05-ee9b-4eea-9e46-6b9e3332460d_Briefcase_Dark+Maple_MB05.jpg?auto=compress,format",

      title: "WEDDING ACCESSORIES",
    },
  ];
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
              <Box
                height={{
                  base: "200px",
                  sm: "300px",
                  md: "400px",
                }}
                width={"100%"}
                overflow={"hidden"}
              >
                <img
                  src={category.image}
                  alt="[+]"
                  height={{
                    base: "200px",
                    sm: "300px",
                    md: "400px",
                  }}
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                />
              </Box>
              <h3>{category.title}</h3>
            </div>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
