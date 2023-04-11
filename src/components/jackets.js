import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  HStack,
  Icon,
} from "@chakra-ui/react";
import "assets/css/components.css";
import { useState } from "react";

const fullImage =
  "https://images.unsplash.com/photo-1633655442356-ab2dbc69c772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8amFja2V0JTIwZmFicmljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60";

const jacket_list = [
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1633655442356-ab2dbc69c772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8amFja2V0JTIwZmFicmljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1640746791140-4ab07eb35c6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
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
