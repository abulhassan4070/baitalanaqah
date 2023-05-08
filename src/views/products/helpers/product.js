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

import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
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

export default function Product() {
  const refBottomImage = useRef(false);
  const refName = useRef("");

  var categ = {};
  categ["abaya"] = 1;
  categ["suits"] = 1;
  categ["shirts"] = 1;
  categ["trousers"] = 1;
  categ["blazers"] = 3;
  categ["polo"] = 1;
  var nameofImage;
  const location = useLocation();

  if (refName.current === "") {
    const { name } = location.state;
    nameofImage = name;
  } else {
    if (refBottomImage.current === false) {
      nameofImage = refName.current.replace(/[0-9]/g, "");
    } else {
      nameofImage = refName.current;
    }
  }

  const [image, setImage] = useState(nameofImage);
  const count = categ[nameofImage];
  const categArray = Array.from({ length: count }, (_, i) => i + 1);

  const handleImageClick = (img) => {
    refBottomImage.current = false;
    refName.current = img;
    setImage(img);
  };
  const handleBottomImageClick = (img) => {
    refBottomImage.current = true;
    refName.current = img;
    setImage(img);
  };

  const categories = Object.keys(categ);
  const filteredCategories = categories.filter((c) => c !== nameofImage);
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
            {count > 1 ? (
              <VStack align={"flex-start"}>
                {categArray.map((c) => {
                  let append = nameofImage;
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
              <Heading pb={4} textTransform={"uppercase"}>
                {t("ofShop." + nameofImage)}
              </Heading>
              <Heading fontSize={20} pb={4}>
                320
              </Heading>
              <Heading fontSize={12} pb={4}>
                <span style={{ textDecoration: "line-through" }}>
                  {"\u20B9"} 10,046{" "}
                </span>
                <span>{"\u20B9"} 7,032 </span>
                <span style={{ color: "red" }}>
                  {t("products.save")} {"\u20B9"} 3,013
                </span>
              </Heading>
              <Box px="50px" w={"full"}>
                <Divider />
              </Box>
              <Text py={4}>{t("products.size")}</Text>
              <Box pb={4}>
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
              </Box>
              <Box textTransform={"uppercase"} className="buttonStyle">
                {t("products.custom")}
              </Box>
              <HStack py={4}>
                <FaRuler /> <Text>{t("products.sizeChart")}</Text>
              </HStack>
              <HStack pb={4}>
                <Box textTransform={"uppercase"} className="buttonStyle">
                  {t("addToCart")}
                </Box>
                <Box textTransform={"uppercase"} className="buttonStyle">
                  {t("buyNow")}
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
          {filteredCategories.map((category) => (
            <Box>
              <Link className="shopbycategory">
                <Box
                  height={{ md: "300px", sm: "200px", base: "100px" }}
                  width="100%"
                  overflow={"hidden"}
                >
                  <Image
                    src={require(`../../../assets/img/shop/${category}.jpeg`)}
                    height="100%"
                    width="100%"
                    transitionDuration={"0.5s"}
                    _hover={{
                      opacity: "0.7",
                      transform: "scale(1.1)",
                    }}
                    objectFit="cover"
                    onClick={() => handleBottomImageClick(category)}
                  />
                </Box>
                <Center>
                  <h3 style={{ color: "black", fontSize: "20px" }}>
                    {t("ofShop." + category).toUpperCase()}
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