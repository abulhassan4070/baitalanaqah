import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { paigeColoOpacity } from "variables/constants";
import { HeaderText } from "widgets/header";

const Fabrics = () => {
  const fabric_list = [
    {
      id: 0,
      name: "Holland & Sherry",
      desc: "A luxury fabric brand that offers a wide range of high-quality fabrics for suits.",
      img: "https://images.prismic.io/enzo/2ec411c6-5724-4b4c-8d45-0f2649925c5b_Zegna.jpg?auto=compress,format",
    },
    {
      id: 1,
      name: "Dormeuil",
      desc: "A French fabric brand that offers luxury fabrics for suits, jackets, and trousers.",
      img: "https://images.prismic.io/enzo/2ab8d0db-f98f-44f8-b098-85249c93335a_Loro_Piana.jpg?auto=compress,format",
    },
    {
      id: 2,
      name: "Scabal",
      desc: "A Belgian fabric brand that offers high-quality fabrics for suits, jackets, and trousers.",
      img: "https://images.prismic.io/enzo/0d477793-1a59-4b27-8daf-876b26bedb5c_Enzo_Sartori.jpg?auto=compress,format",
    },
    {
      id: 3,
      name: "Loro Piana",
      desc: "An Italian fabric brand that offers a range of fabrics for suits and jackets, including wool, silk, and cashmere.",
      img: "https://images.prismic.io/enzo/b5217f08-9c48-41aa-a741-a55ea759df0c_VBC_5.jpg?auto=compress,format",
    },
    {
      id: 4,
      name: "Zegna",
      desc: "An Italian luxury fashion brand that offers a range of fabrics for suits and jackets.",
      img: "https://images.prismic.io/enzo/31a0f1dc-2e2d-45aa-88ed-46843f34d282_Holland_Sherry.jpg?auto=compress,format",
    },
    {
      id: 5,
      name: "Ariston",
      desc: "An Italian fabric brand that offers high-quality fabrics for suits, jackets, and trousers.",
      img: "https://images.prismic.io/enzo/08c16976-5fb5-4d44-ad33-046aa1afcb55_Signature.jpg?auto=compress,format",
    },
    {
      id: 6,
      name: "Cerruti",
      desc: "An Italian fashion brand that offers a range of fabrics for suits and jackets, including wool, silk, and linen.",
      img: "https://images.prismic.io/enzo/2ec411c6-5724-4b4c-8d45-0f2649925c5b_Zegna.jpg?auto=compress,format",
    },
    {
      id: 7,
      name: "Vitale Barberis Canonico",
      desc: "An Italian fabric brand that offers a range of fabrics for suits and jackets, including wool and cashmere.",
      img: "https://images.prismic.io/enzo/2ab8d0db-f98f-44f8-b098-85249c93335a_Loro_Piana.jpg?auto=compress,format",
    },
  ];

  return (
    <Box bg={paigeColoOpacity["5"]}>
      <Container maxW={"7xl"} mt="20px" p={10}>
        <HeaderText
          title="Fabrics"
          subtitle="Our finest fabrics from leading mills."
        />
        <br />
        <Box>
          <SimpleGrid
            spacing={4}
            height={{
              base: "1030px",
              md: "400px",
            }}
            columns={{ base: 1, md: 2 }}
          >
            <Box
              height={{
                base: "630px",
              }}
            >
              <FabricItem {...fabric_list[0]} height={"200px"} />
              <SimpleGrid
                spacing={4}
                mt="10px"
                columns={{ base: 1, md: 2 }}
                height="400px"
              >
                <FabricItem {...fabric_list[2]} height={"200px"} />
                <FabricItem {...fabric_list[3]} height={"200px"} />
              </SimpleGrid>
            </Box>
            <FabricItem {...fabric_list[1]} height={"410px"} />
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};
const FabricItem = ({ name, desc, img, height }) => {
  return (
    <Box
      bg={"white"}
      boxShadow={"2xl"}
      rounded={"md"}
      width={"100%"}
      height={height}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      position={"relative"}
      _hover={{
        transform: "scale(1.05)",
        transition: "all .2s ease-in-out",
      }}
    >
      <Image
        src={img}
        alt={name}
        rounded={"md"}
        width={"100%"}
        height={"100%"}
        fit={"cover"}
      />

      <Box
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        z-index={1}
        color={"white"}
        backgroundColor={"rgba(0,0,0,0.5)"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {name}
        </Heading>
        <Box mt={2} textAlign={"center"}>
          <Text fontSize={"sm"} fontFamily={"body"}>
            {desc}
          </Text>
        </Box>
      </Box>
      <Box
        position={"absolute"}
        zIndex={1}
        top={"5px"}
        left={"5px"}
        background={"#FFF"}
        px={2}
        py={1}
      >
        <Text
          fontSize={"sm"}
          fontFamily={"body"}
          color={"#000"}
          fontWeight={"bold"}
        >
          50% OFF
        </Text>
      </Box>
    </Box>
  );
};
export default Fabrics;
