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
  Tooltip,
  Heading,
  Center,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import React from "react";
import {
  FaFacebook,
  FaPhoneAlt,
  FaPinterest,
  FaRuler,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";
import axios from "axios";
import { apiUrl } from "variables/constants";
import { addToCardRequest } from "variables/functions";

export default function Product() {
  var url = window.location.href;
  var id = url.substring(url.lastIndexOf("/") + 1);
  const [product, setProduct] = React.useState({});
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${apiUrl()}getProductById/${id}`).then((response) => {
      localStorage.setItem("productdata" + id, JSON.stringify(response.data));
      console.log(response.data);
      setProduct(response.data);
    });
  }, [id]);

  React.useEffect(() => {
    axios.get(`${apiUrl()}getProductCategories`).then((response) => {
      localStorage.setItem("categories", JSON.stringify(response.data));
      console.log(response.data);
      setCategories(response.data);
    });
  }, []);
  const { t } = useTranslation();
  return (
    <>
      <Container maxW={"7xl"} mt="20px" p={4} bg="white" dir={i18n.dir()}>
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
            <AspectRatio
              width={"full"}
              maxW={"720px"}
              maxH={"1080px"}
              ratio={2 / 3}
            >
              <Image
                src={product.productImages[0].productImageUrl}
                alt={"Product Image"}
                border={"1px solid black"}
                objectFit={"cover"}
              />
            </AspectRatio>
          </HStack>
          <VStack gridArea={"right"}>
            <VStack w={"full"} border={"3px double black"} py={4}>
              <Heading pb={4} textTransform={"uppercase"}></Heading>
              <Heading fontSize={20} pb={4}>
                {product.productName}
              </Heading>
              <span>
                {"\u20B9"} {product.productPrice}
              </span>{" "}
              <span style={{ color: "red" }}>
                {t("products.save")} {"\u20B9"} {product.productPrice * 0.25}
              </span>
              <Box px="50px" w={"full"}>
                <Divider />
              </Box>
              <Text py={4}>{t("products.size")}</Text>
              <Flex>
                {JSON.parse(product.productSizes).map((size) => {
                  return (
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
                      {size}
                    </Box>
                  );
                })}
              </Flex>
              <HStack py={4}>
                <FaRuler /> <Text>{t("products.sizeChart")}</Text>
              </HStack>
              <HStack pb={4}>
                <Box
                  textTransform={"uppercase"}
                  className="buttonStyle"
                  onClick={() => {
                    addToCardRequest(product.productId, 1);
                  }}
                >
                  {t("addToCart")}
                </Box>
              </HStack>
            </VStack>

            <HStack pt={4} float={"left"} width={"full"}>
              <HStack pr={4} as={Link}>
                <FaWhatsapp />
                <Tooltip
                  label={t("products.whatsapp.tooltip")}
                  bg="white"
                  color="black"
                  border={"1px solid black"}
                  px={2}
                  py={4}
                >
                  <Text textDecoration={"underline"}>
                    {t("products.whatsapp.title")}
                  </Text>
                </Tooltip>
              </HStack>
              <HStack as={Link}>
                <FaPhoneAlt />
                <Tooltip
                  label={t("products.callUs.tooltip")}
                  bg="white"
                  color="black"
                  border={"1px solid black"}
                  px={2}
                  py={4}
                >
                  <Text textDecoration={"underline"}>
                    {t("products.callUs.title")}
                  </Text>
                </Tooltip>
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
                      {t("products.item1.title")}
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
                    {t("products.item1.text1")}
                  </Text>
                  <Text mt="20px">{t("products.item1.text2")}</Text>
                  <UnorderedList
                    mt={"20px"}
                    listStyleType={"circle"}
                    pl={"20px"}
                  >
                    <ListItem>{t("products.item1.list1")}</ListItem>
                    <ListItem>{t("products.item1.list2")}</ListItem>
                    <ListItem>{t("products.item1.list3")}</ListItem>
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
                      {t("products.item2.title")}
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
                                <FormLabel>
                                  {t("products.item2.text1")}
                                </FormLabel>
                                <Input type="text" />
                              </FormControl>
                            </Box>
                            <Box>
                              <FormControl id="email">
                                <FormLabel>
                                  {t("products.item2.text2")}
                                </FormLabel>
                                <Input type="text" />
                              </FormControl>
                            </Box>
                          </HStack>
                          <FormControl id="phone">
                            <FormLabel>{t("products.item2.text3")}</FormLabel>
                            <Input type="email" />
                          </FormControl>
                          <FormControl id="message">
                            <FormLabel>{t("products.item2.text4")}</FormLabel>
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
                              {t("products.item2.text5")}
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
                      {t("products.item3.text1")}
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
                      {t("products.item3.text2")}
                    </Button>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <HStack pt={4}>
              <HStack pr={4} className="share">
                <FaFacebook />
                <Box
                  as="span"
                  visibility="hidden"
                  sx={{
                    ".share:hover &": {
                      visibility: "visible",
                    },
                  }}
                >
                  _
                </Box>
                <Text>{t("products.share")}</Text>
              </HStack>
              <HStack pr={4} className="tweet">
                <FaTwitter />
                <Box
                  as="span"
                  visibility="hidden"
                  sx={{
                    ".tweet:hover &": {
                      visibility: "visible",
                    },
                  }}
                >
                  _
                </Box>
                <Text>{t("products.tweet")}</Text>
              </HStack>
              <HStack className="pin-it">
                <FaPinterest />
                <Box
                  as="span"
                  visibility="hidden"
                  sx={{
                    ".pin-it:hover &": {
                      visibility: "visible",
                    },
                  }}
                >
                  _
                </Box>
                <Text>{t("products.pinit")}</Text>
              </HStack>
            </HStack>
          </VStack>
        </SimpleGrid>
        <Text className="text-inside-line" mt={50} dir="ltr">
          <span style={{ margin: "0 10px", fontSize: "20px" }}>
            {t("products.design.title")}
          </span>
        </Text>
        <VStack fontSize={14} mt={4}>
          <Text>{t("products.design.text1")}</Text>
          <Text>{t("products.design.text2")}</Text>
          <Text>{t("products.design.text3")}</Text>
          <Text>{t("products.design.text4")}</Text>
        </VStack>
        <Center my={16}>
          <Heading fontSize={20} textTransform={"uppercase"}>
            {t("products.also")}
          </Heading>
        </Center>
        <SimpleGrid
          columns={{
            base: 5,
          }}
          spacing={4}
        >
          {categories.map((category) => (
            <Box>
              <Link
                className="shopbycategory"
                to={`/shop/${category.categoryId.toLowerCase()}`}
              >
                <Box height="300px" width="100%" overflow={"hidden"}>
                  <Image
                    src={category.categoryImage}
                    height="100%"
                    width="100%"
                    transitionDuration={"0.5s"}
                    _hover={{
                      opacity: "0.7",
                      transform: "scale(1.1)",
                    }}
                    objectFit="cover"
                  />
                </Box>
                <Center>
                  <h3 style={{ color: "black", fontSize: "20px" }}>
                    {t(
                      "ofShop." + category.categoryName.toLowerCase()
                    ).toUpperCase()}
                  </h3>
                </Center>
                <br />
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
