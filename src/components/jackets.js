import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  HStack,
  Icon,
} from "@chakra-ui/react";

import { useState } from "react";

const fullImage =
  "https://images.prismic.io/enzo/07cd9e28-f7c1-454d-be93-c1b44cfb6fac_CANVAS_header.jpg?auto=compress,format";

const jacket_list = [
  {
    id: 0,
    img: "https://images.prismic.io/enzo/43230d34-9d33-470f-8283-d54c8f52dc77_CANVAS_header_A+%281%29-min.jpg?auto=compress,format",
  },
  {
    id: 1,
    img: "https://images.prismic.io/enzo/e4e02749-0ff5-46db-bf47-d0a390377bf3_CANVAS_header_B-min.jpg?auto=compress,format",
  },
];

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

const HJacketList = (props) => {
  return (
    <HStack align={"center"}>
      {props.jacket_list.map((jacket) => {
        return (
          <Box cursor={"pointer"}>
            <CircleIcon
              key={jacket.name}
              onClick={() => {
                props.handleOnClick(jacket.id);
              }}
              color={props.jacketId === jacket.id ? "gray.500" : "black"}
            ></CircleIcon>
          </Box>
        );
      })}
    </HStack>
  );
};

const Jackets = () => {
  const [jacketId, setJacketId] = useState(jacket_list[0].id);
  const handleOnClick = (id) => {
    setJacketId(id);
  };
  return (
    <SimpleGrid
      height={"600px"}
      spacing={4}
      mt="10px"
      columns={{ base: 1, md: 1 }}
    >
      <Center
        bgImage={{ base: jacket_list[jacketId].img, md: fullImage }}
        bgSize={"cover"}
        display={{ base: "flex", md: "flex" }}
      >
        <Box textAlign={"center"} color={"white"} width={"80%"}>
          <Heading
            id="heading"
            color={"white"}
            pb="10px"
            textTransform={"uppercase"}
          >
            Inside our Jackets
          </Heading>

          <br />
          <Center>
            <Box className="button-53 white" textTransform={"uppercase"}>
              Learn more
            </Box>
          </Center>
        </Box>
      </Center>
      <Box id="hlist" display={{ base: "block", md: "none" }}>
        <Center>
          <HJacketList
            jacketId={jacketId}
            jacket_list={jacket_list}
            handleOnClick={handleOnClick}
          />
        </Center>
      </Box>
    </SimpleGrid>
  );
};
export default Jackets;
