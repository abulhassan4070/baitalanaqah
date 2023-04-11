import React from "react";

import AboutUsSection from "components/about";
import HeroSection from "../../../components/hero";
import TestimonialSection from "../../../components/testimonials";
import Fabrics from "components/fabrics";
import ShopByCategory from "components/shopbycategory";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import ShowroomsList from "components/showroomlist";
import Jackets from "components/jackets";
export default function HomePage() {
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
      city: "Philadelphia",
      street: "1528 Walnut Street Suite 1401",
      state: "Philadelphia PA 19102",
    },
  ];
  return (
    <>
      <HeroSection />
      <ShopByCategory />
      <AboutUsSection />
      <Box p={{ base: "20px", md: "40px" }}>
        <SimpleGrid
          mt="20px"
          columns={{
            base: 1,
            md: 2,
          }}
          spacing="10px"
          display={{
            base: "block",
            md: "grid",
          }}
        >
          <Box>
            <Heading>Visit A Showroom</Heading>
            <Text mt="20px">By Appointment Only</Text>
            <Text mt="10px">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </Text>
          </Box>
          <Box>
            <ShowroomsList
              cities={cities}
              columns={{
                base: 1,
                md: 2,
              }}
              button={false}
            />
          </Box>
        </SimpleGrid>
      </Box>
      <TestimonialSection />
      <Fabrics />
      <Jackets />
      {/* <LatestBlogs /> */}
    </>
  );
}
