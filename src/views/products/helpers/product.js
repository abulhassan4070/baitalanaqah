import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Divider,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export default function Product() {
  const location = useLocation();
  const { name } = location.state;
  return (
    <>
      <Container maxW={"7xl"} mt="20px" p={4} bg="white">
        <SimpleGrid
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
          }}
          gridTemplateRows={{
            base: "auto",
            md: "auto",
          }}
          gridTemplateAreas={{
            base: `'left' 'right'`,
            md: `'left right'`,
          }}
          spacing={4}
          mt="40px"
          p={4}
          border={"1px"}
        >
          <HStack gridArea="left" align={"flex-start"}>
            <VStack>
              <Box border={"1px solid black"} m={4}>
                <img
                  width={"76px"}
                  height={"114px"}
                  src={require(`../../../assets/img/shop/${name}.jpeg`)}
                  alt="product"
                  border={"1px solid black"}
                  m={4}
                />
              </Box>
              <Box border={"1px solid black"} m={4}>
                <img
                  width={"76px"}
                  height={"114px"}
                  src={require(`../../../assets/img/shop/${name}.jpeg`)}
                  alt="product"
                  border={"1px solid black"}
                  m={4}
                />
              </Box>
              <Box border={"1px solid black"} m={4}>
                <img
                  width={"76px"}
                  height={"114px"}
                  src={require(`../../../assets/img/shop/${name}.jpeg`)}
                  alt="product"
                  border={"1px solid black"}
                  m={4}
                />
              </Box>
            </VStack>

            <img
              width={"262px"}
              height={"393px"}
              src={require(`../../../assets/img/shop/${name}.jpeg`)}
              alt="product"
              border={"1px solid black"}
              m={4}
            />
          </HStack>
          <VStack gridArea={"right"}>
            <VStack w={"full"} border={"5px double black"} py={4}>
              <Text>{name}</Text>
              <Text>320</Text>
              <Text>
                <span style={{ textDecoration: "line-through" }}>
                  {"\u20B9"} 10,046{" "}
                </span>
                <span>{"\u20B9"} 7,032 </span>
                <span style={{ color: "red" }}>Save {"\u20B9"} 3,013</span>
              </Text>
              <Box px="50px" w={"full"}>
                <Divider />
              </Box>
              <Text>Size</Text>
              <Box
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid black",
                }}
              >
                L
              </Box>
              <Box
                as="button"
                borderRadius="full"
                bg="black"
                color="white"
                px={4}
                h={8}
                textTransform={"uppercase"}
              >
                Custom Tailored
              </Box>
              <Box>Size Chart</Box>
              <HStack>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid black",
                    padding: 10,
                  }}
                  textTransform={"uppercase"}
                >
                  Add to Cart
                </Box>
                <Box
                  as="button"
                  borderRadius="full"
                  bg="black"
                  color="white"
                  px={4}
                  h={8}
                  textTransform={"uppercase"}
                >
                  Custom Tailored
                </Box>
              </HStack>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid black",
                  padding: 10,
                }}
                textTransform={"uppercase"}
              >
                Add to My Styleboard
              </Box>
            </VStack>
            <HStack>
              <Text>Customize</Text>
              <Text>Whatsapp</Text>
              <Text>Call</Text>
            </HStack>
            <Accordion allowToggle w={"full"}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Shipping
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Talk to a Designer
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Reviews
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <HStack>
              <Text>Share</Text>
              <Text>Tweet</Text>
              <Text>Pin it</Text>
            </HStack>
          </VStack>
        </SimpleGrid>
      </Container>
    </>
  );
}
