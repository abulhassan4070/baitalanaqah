import { StarIcon } from "@chakra-ui/icons";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Box,
  Container,
  Divider,
  HStack,
  Image,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
  VStack,
  Textarea,
} from "@chakra-ui/react";

import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  FaFacebook,
  FaPhoneAlt,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Product() {
  var categ = {};
  categ["abaya"] = 1;
  categ["suits"] = 1;
  categ["shirts"] = 1;
  categ["trousers"] = 1;
  categ["blazers"] = 3;
  categ["polo"] = 1;

  const location = useLocation();
  const { name } = location.state;
  const count = categ[name];
  const categArray = Array.from({ length: count }, (_, i) => i + 1);
  const [image, setImage] = useState(name);
  const handleImageClick = (img) => {
    setImage(img);
  };

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
            {count > 1 ? (
              <VStack align={"flex-start"}>
                {categArray.map((c) => {
                  let append = name;
                  if (c !== 1) append = append + c;
                  return (
                    <Box
                      key={append}
                      border={image === append ? "2px solid black" : ""}
                    >
                      <img
                        width={"76px"}
                        height={"114px"}
                        src={require(`../../../assets/img/shop/${append}.jpeg`)}
                        alt="product"
                        onClick={() => handleImageClick(append)}
                      />
                    </Box>
                  );
                })}
              </VStack>
            ) : (
              ""
            )}
            <AspectRatio
              width={"full"}
              maxW={"720px"}
              maxH={"1080px"}
              ratio={2 / 3}
            >
              <Image
                src={require(`../../../assets/img/shop/${image}.jpeg`)}
                alt="product"
                border={"1px solid black"}
                objectFit={"cover"}
              />
            </AspectRatio>
          </HStack>
          <VStack gridArea={"right"}>
            <VStack w={"full"} border={"3px double black"} py={4}>
              <Text textTransform={"uppercase"}>{name}</Text>
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
                  flex={1}
                  as="button"
                  borderRadius="full"
                  bg="black"
                  color="white"
                  px={4}
                  h={8}
                  textTransform={"uppercase"}
                >
                  Buy It Now
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
            <HStack pt={4}>
              <HStack pr={4}>
                <Text textTransform={"uppercase"}>Customize</Text>
              </HStack>
              <HStack pr={4}>
                <FaWhatsapp />
                <Text>Whatsapp</Text>
              </HStack>
              <HStack>
                <FaPhoneAlt />
                <Text>Call</Text>
              </HStack>
            </HStack>
            <Accordion allowToggle w={"full"} pt={4}>
              <AccordionItem
                borderTop={"1px solid black"}
                borderX={"1px solid black"}
              >
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="center"
                      textTransform={"uppercase"}
                    >
                      Shipping
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text
                    mt="10px"
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                  >
                    We've got your back
                  </Text>
                  <Text mt="20px">
                    IF YOU DON’T LOVE IT, YOU CAN SEND IT BACK. WE WILL GLADLY
                    ACCEPT UNWORN, UNWASHED, UNALTERED OR UNUSED MERCHANDISE IN
                    SELLABLE CONDITION WITHIN 14 DAYS OF PURCHASE FOR A CREDIT
                    NOTE.
                  </Text>
                  <UnorderedList
                    mt={"20px"}
                    listStyleType={"circle"}
                    pl={"20px"}
                  >
                    <ListItem>Free Shipping on orders above 500 AED</ListItem>
                    <ListItem>
                      Free returns within 7 days (excludes custom orders & face
                      masks)
                    </ListItem>
                    <ListItem>
                      Standard Delivery Charges applicable on orders below 500
                      AED
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                borderTop={"1px solid black"}
                borderX={"1px solid black"}
              >
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="center"
                      textTransform={"uppercase"}
                    >
                      Talk to a Designer
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex align={"center"} justify={"center"}>
                    <Stack>
                      <Box>
                        <Stack spacing={4}>
                          <HStack>
                            <Box>
                              <FormControl id="name">
                                <FormLabel>NAME</FormLabel>
                                <Input type="text" />
                              </FormControl>
                            </Box>
                            <Box>
                              <FormControl id="email">
                                <FormLabel>EMAIL</FormLabel>
                                <Input type="text" />
                              </FormControl>
                            </Box>
                          </HStack>
                          <FormControl id="phone">
                            <FormLabel>PHONE NUMBER</FormLabel>
                            <Input type="email" />
                          </FormControl>
                          <FormControl id="message">
                            <FormLabel>MESSAGE</FormLabel>
                            <Textarea type="text" />
                          </FormControl>
                          <Stack
                            spacing={10}
                            pt={2}
                            direction={"row"}
                            textAlign={"center"}
                            justifyContent={"center"}
                          >
                            <Button
                              bg={"blackAlpha.900"}
                              color={"white"}
                              _hover={{
                                bg: "blackAlpha.800",
                              }}
                            >
                              SEND
                            </Button>
                          </Stack>
                        </Stack>
                      </Box>
                    </Stack>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={"1px solid black"}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="center">
                      <StarIcon
                        strokeWidth={2}
                        stroke={"gold"}
                        color={"white"}
                      />
                      <StarIcon
                        strokeWidth={2}
                        stroke={"gold"}
                        color={"white"}
                      />
                      <StarIcon
                        strokeWidth={2}
                        stroke={"gold"}
                        color={"white"}
                      />
                      <StarIcon
                        strokeWidth={2}
                        stroke={"gold"}
                        color={"white"}
                      />
                      <StarIcon
                        strokeWidth={2}
                        stroke={"gold"}
                        color={"white"}
                      />
                      NO REVIEWS
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack
                    spacing={10}
                    pt={2}
                    direction={"row"}
                    textAlign={"center"}
                    justifyContent={"center"}
                  >
                    <Button
                      bg={"blackAlpha.900"}
                      color={"white"}
                      _hover={{
                        bg: "blackAlpha.800",
                      }}
                    >
                      WRITE A REVIEW
                    </Button>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <HStack pt={4}>
              <HStack pr={4}>
                <FaFacebook />
                <Text>Share</Text>
              </HStack>
              <HStack pr={4}>
                <FaTwitter />
                <Text>Tweet</Text>
              </HStack>
              <HStack>
                <FaPinterest />
                <Text>Pin it</Text>
              </HStack>
            </HStack>
          </VStack>
        </SimpleGrid>
      </Container>
    </>
  );
}
