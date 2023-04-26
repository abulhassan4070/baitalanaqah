import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import abayaImage from "assets/img/abaya.jpg";
import { Link } from "react-router-dom";

export default function AbayaSection() {
  return (
    <>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        spacing={0}
      >
        <Box
          background={"black"}
          p={8}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <h5
              class="section-title text-white"
              style={{ color: "white", fontSize: "1.5rem" }}
            >
              Abaya
            </h5>
            <Text
              as={"span"}
              position={"relative"}
              lineHeight={0}
              color={"white"}
            >
              Purchase ABAYA
              <br />
              with us exclusively
            </Text>
          </Heading>
          <Text color={"gray.300"} mt={3}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin, nisl eget ultricies tincidunt, lorem ipsum aliquam
            libero, sit amet ultricies lorem ipsum dolor sit amet.
          </Text>
          <Flex
            style={{
              marginTop: "10px",
            }}
          >
            <Link to="/shop/abaya">
              <Box className="buttonStyle white outline" mt="10px">
                Shop Now
              </Box>
            </Link>
          </Flex>
        </Box>
        <Box background={"black"}>
          <Image
            src={abayaImage}
            alt={"Abaya"}
            rounded={"md"}
            width={"100%"}
            height={"100%"}
            fit={"cover"}
          />
        </Box>
      </SimpleGrid>
    </>
  );
}
