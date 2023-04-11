import {
  Box,
  Text,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  HStack,
  Center,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import "assets/css/components.css";

const FabricList = (props) => {
  return (
    <VStack align={"left"}>
      {props.fabric_list.map((fabric) => {
        return (
          <Box cursor={"pointer"}>
            <Text
              key={fabric.name}
              fontSize={"30px"}
              onMouseOver={() => {
                props.handleMouseOver(fabric.id);
              }}
              color={props.fabricId === fabric.id ? "gray.500" : "black"}
            >
              {fabric.name}
            </Text>
            <hr />
            <br/>
          </Box>
        );
      })}
    </VStack>
  );
};

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

const HFabricList = (props) => {
  return (
    <HStack align={"center"}>
      {props.fabric_list.map((fabric) => {
        return (
          <Box cursor={"pointer"}>
            <CircleIcon
              key={fabric.name}
              onClick={() => {
                props.handleOnClick(fabric.id);
              }}
              color={props.fabricId === fabric.id ? "gray.500" : "black"}
            ></CircleIcon>
          </Box>
        );
      })}
    </HStack>
  );
};

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

  const [fabricId, setFabricId] = useState(fabric_list[0].id);

  const handleMouseOver = (id) => {
    setFabricId(id);
  };

  return (
    <Container maxW={"7xl"} mt="20px" p={10} bg="white">
      <Box textAlign={"center"}>
        <Heading>Our Fabrics</Heading>
      </Box>
      <SimpleGrid
        height={"600px"}
        spacing={4}
        mt="10px"
        columns={{ base: 1, md: 2 }}
      >
        <Box id="vlist" display={{ base: "none", md: "flex" }} style={{
          alignItems: "center",
        }}>
          <FabricList
            fabricId={fabricId}
            fabric_list={fabric_list}
            handleMouseOver={handleMouseOver}
          />
        </Box>
        <Center bgImage={fabric_list[fabricId].img} bgSize={"cover"}>
          <Box textAlign={"center"} color={"white"} width={"80%"}>
            <Heading id="heading" color={"white"} pb="10px">
              {fabric_list[fabricId].name}
            </Heading>
            <Text id="desc" color={"white"} pb="10px">
              {fabric_list[fabricId].desc}
            </Text>
            <br />
            <Center>
              <Box
                className="button-53 white"
                boxColor={{ bg: "black", fg: "white" }}
              >
                Learn more
              </Box>
            </Center>
          </Box>
        </Center>
        <Box id="hlist" display={{ base: "block", md: "none" }}>
          <Center>
            <HFabricList
              fabricId={fabricId}
              fabric_list={fabric_list}
              handleOnClick={handleMouseOver}
            />
          </Center>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Fabrics;
