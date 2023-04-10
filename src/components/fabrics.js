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
          <Box cursor={"pointer"} className="half-a-border-on-bottom">
            <Heading
              key={fabric.name}
              onMouseOver={() => {
                props.handleMouseOver(fabric.id);
              }}
              color={props.fabricId === fabric.id ? "gray.500" : "black"}
            >
              {fabric.name}
            </Heading>
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

const CrossBorderBox = (props) => {
  return (
    <Box pb="10px">
      <Box width="fit-content" className="content">
        <Box className="outer borderLeftRight" mt="-5px"></Box>
        <Box
          bg={props.boxColor.bg}
          color={props.boxColor.fg}
          width="fit-content"
          className="innerContent borderLeftRight"
          _hover={{
            bg: props.boxColor.fg,
            color: props.boxColor.bg,
          }}
        >
          <Text p="10px 15px" textTransform="uppercase">
            {props.boxName}
          </Text>
        </Box>
        <Box className="outer borderLeftRight" mb="-5px"></Box>
      </Box>
    </Box>
  );
};

const Fabrics = () => {
  const fabric_list = [
    {
      id: 0,
      name: "ERMENEGILDO ZEGNA",
      img: "https://images.prismic.io/enzo/2ec411c6-5724-4b4c-8d45-0f2649925c5b_Zegna.jpg?auto=compress,format",
    },
    {
      id: 1,
      name: "LORO PIANA",
      img: "https://images.prismic.io/enzo/2ab8d0db-f98f-44f8-b098-85249c93335a_Loro_Piana.jpg?auto=compress,format",
    },
    {
      id: 2,
      name: "ENZO SARTORI",
      img: "https://images.prismic.io/enzo/0d477793-1a59-4b27-8daf-876b26bedb5c_Enzo_Sartori.jpg?auto=compress,format",
    },
    {
      id: 3,
      name: "VITALE BARBERIS",
      img: "https://images.prismic.io/enzo/b5217f08-9c48-41aa-a741-a55ea759df0c_VBC_5.jpg?auto=compress,format",
    },
    {
      id: 4,
      name: "HOLLAND & SHERRY",
      img: "https://images.prismic.io/enzo/31a0f1dc-2e2d-45aa-88ed-46843f34d282_Holland_Sherry.jpg?auto=compress,format",
    },
    {
      id: 5,
      name: "SIGNATURE",
      img: "https://images.prismic.io/enzo/08c16976-5fb5-4d44-ad33-046aa1afcb55_Signature.jpg?auto=compress,format",
    },
  ];

  const [fabricId, setFabricId] = useState(fabric_list[0].id);

  const handleMouseOver = (id) => {
    setFabricId(id);
  };

  return (
    <Container maxW={"7xl"} mt="20px" p={10} bg="white">
      <SimpleGrid
        height={"600px"}
        id="grid"
        p="50px"
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
        }}
        gridTemplateRows={{
          base: "auto 1fr auto",
          md: "auto",
        }}
        gridTemplateAreas={{
          base: `'caption' 'img' 'list'`,
          md: `'caption caption' 'list img'`,
        }}
        spacing={4}
        mt="40px"
        border={"1px"}
      >
        <Box gridArea="caption" textAlign={"center"}>
          <Heading>Our Fabrics</Heading>
        </Box>
        <Center id="listbox" gridArea="list" pr="30px">
          <Box id="vlist" display={{ base: "none", md: "block" }}>
            <FabricList
              fabricId={fabricId}
              fabric_list={fabric_list}
              handleMouseOver={handleMouseOver}
            />
          </Box>
          <Box id="hlist" display={{ base: "block", md: "none" }}>
            <Center>
              <HFabricList
                fabricId={fabricId}
                fabric_list={fabric_list}
                handleOnClick={handleMouseOver}
              />
            </Center>
          </Box>
        </Center>
        <Center
          gridArea="img"
          bgImage={fabric_list[fabricId].img}
          bgSize={"cover"}
        >
          <Box>
            <Heading id="heading" color={"white"} pb="10px">
              {fabric_list[fabricId].name}
            </Heading>

            <Center>
              <CrossBorderBox
                boxName={"Learn more"}
                boxColor={{ bg: "black", fg: "white" }}
              ></CrossBorderBox>
            </Center>
          </Box>
        </Center>
      </SimpleGrid>
    </Container>
  );
};

export default Fabrics;
