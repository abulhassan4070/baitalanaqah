import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  VStack,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  TabList,
  HStack,
  Spacer,
  Heading,
  Button,
  SimpleGrid,
  Box,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Text,
  Select,
  Image,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HeaderText } from "widgets/header";
import { useRef, useState } from "react";
import "../../assets/css/customize.css";
import { MdRefresh } from "react-icons/md";
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";

export default function CustomizePage() {
  // This ref will be connected to the overlay div
  const overlayRef = useRef();

  // This function is called when the "Start Searching" button gets clicked
  const openSearch = () => {
    overlayRef.current.style.visibility = "visible";
    overlayRef.current.style.right = 0;
    overlayRef.current.style.transition = "0.5s";
  };

  // This function is called when the "Close" button is clicked
  const closeSearch = () => {
    overlayRef.current.style.visibility = "hidden";
  };

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const handleTabsClick = (i) => {
    //alert(tabIndex);
    /*
    if (tabIndex === 0) {
      if (i === -1) return;
    } else if (tabIndex === 4) {
      if (i === 1) return;
    }
    */
    setTabIndex(tabIndex + i);
  };

  const { t } = useTranslation();

  return (
    <>
      <Container maxW={"7xl"} p="12" dir={i18n.dir()}>
        <Breadcrumb
          fontWeight="medium"
          fontSize="sm"
          spacing="8px"
          textTransform="uppercase"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink color="gray.500" style={{ textDecoration: "none" }}>
              <NavLink to="/">{t("home")}</NavLink>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink style={{ textDecoration: "none" }}>
              {t("customize")}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <br />
        <HeaderText title={t("custom.title")} subtitle={t("custom.subtitle")} />
      </Container>
      <Container maxW={"container.xl"} p={0}>
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
          spacing={0}
        >
          <VStack
            w="full"
            h="full"
            alignItems={"flex-start"}
            border={"1px solid black"}
            gridArea={"left"}
          >
            <Box position={"relative"} w={"full"} h={"full"}>
              <Box position={"absolute"} top={10} left={10}>
                <Select variant={"unstyled"} fontSize={20}>
                  <option value="option1">{t("ofShop.abaya")}</option>
                  <option value="option2">{t("ofShop.suits")}</option>
                  <option value="option3">{t("ofShop.shirts")}</option>
                  <option value="option4">{t("ofShop.trousers")}</option>
                  <option value="option5">{t("ofShop.blazers")}</option>
                  <option value="option6">{t("ofShop.polo")}</option>
                </Select>
              </Box>
              <Box
                position={"absolute"}
                top={10}
                right={10}
                _hover={{
                  transform: "rotate(90deg)",
                }}
                transition={"all .5s linear"}
              >
                <MdRefresh size={25} />
              </Box>
              <Image
                h={"full"}
                w={"full"}
                src={require("assets/img/customize/customize.jpeg")}
              />
            </Box>
          </VStack>
          <VStack
            w="full"
            h="full"
            alignItems={"flex-start"}
            border={"1px solid black"}
            className="container"
            gridArea={"right"}
            dir={i18n.dir()}
          >
            <div ref={overlayRef} className="overlay">
              <Button onClick={closeSearch}>{"<"}</Button>
              <div className="text" onClick={closeSearch}>
                {t("custom.close")}
              </div>
            </div>
            <Tabs
              isFitted
              w={"full"}
              h={"max-content"}
              isLazy
              index={tabIndex}
              onChange={handleTabsChange}
            >
              <TabList>
                <Tab>{t("custom.tab1.title")}</Tab>
                <Tab>{t("custom.tab2.title")}</Tab>
                <Tab>{t("custom.tab3.title")}</Tab>
                <Tab>{t("custom.tab4.title")}</Tab>
                <Tab>{t("custom.tab5.title")}</Tab>
              </TabList>

              <TabPanels
                style={{
                  height: "500px",
                  overflowY: "auto",
                }}
                sx={{
                  "::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                <TabPanel>
                  <Heading fontSize={16} py={4}>
                    {t("custom.tab1.subtitle")}
                  </Heading>
                  <Button>{t("filters")}</Button>
                  <SimpleGrid columns={2} spacing={2} py={4}>
                    <Box
                      bgImg={require("assets/img/customize/fabric/1.jpeg")}
                      height={"300px"}
                      bgSize={"cover"}
                    ></Box>
                    <Box
                      bgImg={require("assets/img/customize/fabric/2.jpeg")}
                      height={"300px"}
                      bgSize={"cover"}
                    ></Box>
                    <Box
                      bgImg={require("assets/img/customize/fabric/3.jpeg")}
                      height={"300px"}
                      bgSize={"cover"}
                    ></Box>
                    <Box
                      bgImg={require("assets/img/customize/fabric/4.jpeg")}
                      height={"300px"}
                      bgSize={"cover"}
                    ></Box>
                    <Box
                      bgImg={require("assets/img/customize/fabric/1.jpeg")}
                      height={"300px"}
                      bgSize={"cover"}
                    ></Box>
                    <Box
                      bgImg={require("assets/img/customize/fabric/2.jpeg")}
                      height={"300px"}
                      bgSize={"cover"}
                    ></Box>
                    <Box
                      bgImg={require("assets/img/customize/fabric/3.jpeg")}
                      height={"300px"}
                      bgSize={"cover"}
                    ></Box>
                    <Box
                      bgImg={require("assets/img/customize/fabric/4.jpeg")}
                      height={"300px"}
                      bgSize={"cover"}
                    ></Box>
                  </SimpleGrid>
                </TabPanel>
                <TabPanel>
                  <Heading fontSize={16} py={4}>
                    {t("custom.tab2.subtitle")}
                  </Heading>
                  <Button>{t("filters")}</Button>
                  <SimpleGrid columns={2} spacing={2} py={4}>
                    <Box
                      bgImg={require("assets/img/customize/lining/1.jpeg")}
                      height={"300px"}
                      bgSize={"cover"}
                    ></Box>
                    <Box
                      bgImg={require("assets/img/customize/lining/2.jpeg")}
                      height={"300px"}
                      bgSize={"cover"}
                    ></Box>
                    <Box
                      bgImg={require("assets/img/customize/lining/3.jpeg")}
                      height={"300px"}
                      bgSize={"cover"}
                    ></Box>
                    <Box
                      bgImg={require("assets/img/customize/lining/4.jpeg")}
                      height={"300px"}
                      bgSize={"cover"}
                    ></Box>
                    <Box
                      bgImg={require("assets/img/customize/lining/1.jpeg")}
                      height={"300px"}
                      bgSize={"cover"}
                    ></Box>
                    <Box
                      bgImg={require("assets/img/customize/lining/2.jpeg")}
                      height={"300px"}
                      bgSize={"cover"}
                    ></Box>
                    <Box
                      bgImg={require("assets/img/customize/lining/3.jpeg")}
                      height={"300px"}
                      bgSize={"cover"}
                    ></Box>
                    <Box
                      bgImg={require("assets/img/customize/lining/4.jpeg")}
                      height={"300px"}
                      bgSize={"cover"}
                    ></Box>
                  </SimpleGrid>
                </TabPanel>
                <TabPanel>
                  <Heading fontSize={16} py={4}>
                    {t("custom.tab3.subtitle")}
                  </Heading>
                  <Accordion allowToggle defaultIndex={[0]}>
                    <AccordionItem bg={"gray.200"} mb={8}>
                      <h2>
                        <AccordionButton p={4}>
                          <Flex w="full">
                            <Box as="span" flex="1" textAlign="left">
                              {t("custom.tab3.label1")}
                            </Box>
                            <Box as="span" flex="1" textAlign="right">
                              {t("custom.tab3.text1")}
                            </Box>
                            <AccordionIcon />
                          </Flex>
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        mx={4}
                        borderTop={"1px dashed black"}
                      >
                        <Flex bg={"gray.100"} p={4} onClick={openSearch}>
                          <Box as="span" flex="1" textAlign="left">
                            {t("custom.tab3.label1-1")}
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            {t("custom.tab3.text1-1")}
                          </Box>
                        </Flex>
                        <Flex bg={"gray.100"} mt={4} p={4}>
                          <Box as="span" flex="1" textAlign="left">
                            {t("custom.tab3.label1-2")}
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            {t("custom.tab3.text1-2")}
                          </Box>
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg={"gray.200"} mb={8}>
                      <h2>
                        <AccordionButton p={4}>
                          <Flex w="full">
                            <Box as="span" flex="1" textAlign="left">
                              {t("custom.tab3.label2")}
                            </Box>
                            <Box as="span" flex="1" textAlign="right">
                              {t("custom.tab3.text2")}
                            </Box>
                            <AccordionIcon />
                          </Flex>
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        mx={4}
                        borderTop={"1px dashed black"}
                      >
                        <Flex bg={"gray.100"} p={4}>
                          <Box as="span" flex="1" textAlign="left">
                            {t("custom.tab3.label2-1")}
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            {t("custom.tab3.text2-1")}
                          </Box>
                        </Flex>
                        <Flex bg={"gray.100"} mt={4} p={4}>
                          <Box as="span" flex="1" textAlign="left">
                            {t("custom.tab3.label2-2")}
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            {t("custom.tab3.text2-2")}
                          </Box>
                        </Flex>
                        <Flex bg={"gray.100"} mt={4} p={4}>
                          <Box as="span" flex="1" textAlign="left">
                            {t("custom.tab3.label2-3")}
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            {t("custom.tab3.text2-3")}
                          </Box>
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </TabPanel>
                <TabPanel>
                  <Heading fontSize={16} py={4}>
                    {t("custom.tab4.subtitle")}
                  </Heading>
                  <Accordion allowToggle defaultIndex={[0]}>
                    <AccordionItem bg={"gray.200"} mb={8}>
                      <h2>
                        <AccordionButton p={4}>
                          <Flex w="full">
                            <Box as="span" flex="1" textAlign="left">
                              {t("custom.tab4.label1")}
                            </Box>
                            <Box as="span" flex="1" textAlign="right"></Box>
                            <AccordionIcon />
                          </Flex>
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        mx={4}
                        borderTop={"1px dashed black"}
                      >
                        <Flex bg={"gray.100"} p={4} onClick={openSearch}>
                          <Box as="span" flex="1" textAlign="left">
                            {t("custom.tab4.label1-1")}
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            {t("custom.tab4.text1-1")}
                          </Box>
                        </Flex>
                        <Flex bg={"gray.100"} mt={4} p={4}>
                          <Box as="span" flex="1" textAlign="left">
                            {t("custom.tab4.label1-2")}
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            {t("custom.tab4.text1-2")}
                          </Box>
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg={"gray.200"} mb={8}>
                      <h2>
                        <AccordionButton p={4}>
                          <Flex w="full">
                            <Box as="span" flex="1" textAlign="left">
                              {t("custom.tab4.label2")}
                            </Box>
                            <Box as="span" flex="1" textAlign="right">
                              {t("custom.tab4.text2")}
                            </Box>
                            <AccordionIcon />
                          </Flex>
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        mx={4}
                        borderTop={"1px dashed black"}
                      >
                        <Flex bg={"gray.100"} p={4}>
                          <Box as="span" flex="1" textAlign="left">
                            {t("custom.tab4.label2-1")}
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            {t("custom.tab4.text2-1")}
                          </Box>
                        </Flex>
                        <Flex bg={"gray.100"} mt={4} p={4}>
                          <Box as="span" flex="1" textAlign="left">
                            {t("custom.tab4.label2-2")}
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            {t("custom.tab4.text2-2")}
                          </Box>
                        </Flex>
                        <Flex bg={"gray.100"} mt={4} p={4}>
                          <Box as="span" flex="1" textAlign="left">
                            {t("custom.tab4.label2-3")}
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            {t("custom.tab4.text2-3")}
                          </Box>
                        </Flex>
                        <Flex bg={"gray.100"} mt={4} p={4}>
                          <Box as="span" flex="1" textAlign="left">
                            {t("custom.tab4.label2-4")}
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            {t("custom.tab4.text2-4")}
                          </Box>
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </TabPanel>
                <TabPanel>
                  <Heading fontSize={20} py={4}>
                    {t("custom.tab5.subtitle")}
                  </Heading>
                  <Heading fontSize={16} py={4}>
                    {t("custom.tab5.label1")}
                  </Heading>
                  <Text fontSize={18}>{t("custom.tab5.label1Sub")}</Text>
                  <Flex
                    fontSize={14}
                    mt={4}
                    pb={3}
                    borderBottom={"1px"}
                    borderColor={"gray.200"}
                  >
                    <Box as="span" flex="1" textAlign="left" color={"gray.500"}>
                      {t("custom.tab5.label1-1")}
                    </Box>
                    <Box as="span" flex="1" textAlign="right">
                      {t("custom.tab5.text1-1")}
                    </Box>
                  </Flex>
                  <Flex
                    fontSize={14}
                    mt={4}
                    p={0}
                    pb={3}
                    borderBottom={"1px"}
                    borderColor={"gray.200"}
                  >
                    <Box as="span" flex="1" textAlign="left" color={"gray.500"}>
                      {t("custom.tab5.label1-2")}
                    </Box>
                    <Box as="span" flex="1" textAlign="right">
                      {t("custom.tab5.text1-2")}
                    </Box>
                  </Flex>
                  <Heading fontSize={16} py={4} mt={4}>
                    {t("custom.tab5.label2")}
                  </Heading>
                  <Text fontSize={18}>{t("custom.tab5.label2Sub")}</Text>
                  <Flex
                    fontSize={14}
                    mt={4}
                    pb={3}
                    borderBottom={"1px"}
                    borderColor={"gray.200"}
                  >
                    <Box as="span" flex="1" textAlign="left" color={"gray.500"}>
                      {t("custom.tab5.label2-1")}
                    </Box>
                    <Box as="span" flex="1" textAlign="right">
                      {t("custom.tab5.text2-1")}
                    </Box>
                  </Flex>
                  <Flex
                    fontSize={14}
                    mt={4}
                    p={0}
                    pb={3}
                    borderBottom={"1px"}
                    borderColor={"gray.200"}
                  >
                    <Box as="span" flex="1" textAlign="left" color={"gray.500"}>
                      {t("custom.tab5.label2-2")}
                    </Box>
                    <Box as="span" flex="1" textAlign="right">
                      {t("custom.tab5.text2-2")}
                    </Box>
                  </Flex>
                  <Heading fontSize={16} py={4} mt={4}>
                    {t("custom.tab5.label3")}
                  </Heading>
                  <Text fontSize={18}>{t("custom.tab5.label3Sub")}</Text>
                  <Flex
                    fontSize={14}
                    mt={4}
                    pb={3}
                    borderBottom={"1px"}
                    borderColor={"gray.200"}
                  >
                    <Box as="span" flex="1" textAlign="left" color={"gray.500"}>
                      {t("custom.tab5.label3-1")}
                    </Box>
                    <Box as="span" flex="1" textAlign="right">
                      {t("custom.tab5.text3-1")}
                    </Box>
                  </Flex>
                  <Flex
                    fontSize={14}
                    mt={4}
                    p={0}
                    pb={3}
                    borderBottom={"1px"}
                    borderColor={"gray.200"}
                  >
                    <Box as="span" flex="1" textAlign="left" color={"gray.500"}>
                      {t("custom.tab5.label3-2")}
                    </Box>
                    <Box as="span" flex="1" textAlign="right">
                      {t("custom.tab5.text3-2")}
                    </Box>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
            <VStack py={2} width={"full"} px={4} borderTop={"1px solid black"}>
              <HStack width={"full"}>
                <HStack
                  as={Button}
                  float={"left"}
                  onClick={() => handleTabsClick(-1)}
                  style={
                    tabIndex === 0
                      ? { pointerEvents: "none", opacity: "0.4" }
                      : {}
                  }
                >
                  <ArrowBackIcon />
                  <span>{t("custom.prev")}</span>
                </HStack>
                <Spacer />
                <HStack
                  as={Button}
                  float={"right"}
                  onClick={() => handleTabsClick(1)}
                  style={
                    tabIndex === 4
                      ? { pointerEvents: "none", opacity: "0.4" }
                      : {}
                  }
                >
                  <span>{t("custom.next")}</span>
                  <ArrowForwardIcon />
                </HStack>
              </HStack>
              <HStack width={"full"}>
                <HStack float={"left"}>
                  <span className="buttonStyle">{t("custom.total")}</span>
                  <span className="buttonStyle">{t("custom.shipInfo")}</span>
                </HStack>
                <Spacer />
                <HStack float={"right"} className="buttonStyle">
                  <span>{t("addToCart")}</span>
                </HStack>
              </HStack>
            </VStack>
          </VStack>
        </SimpleGrid>
      </Container>
    </>
  );
}
