import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Flex,
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
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import "../../assets/css/customize.css";
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";

export default function CustomizePage() {

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const handleTabsClick = (i) => {
    setTabIndex(tabIndex + i);
  };

  const { t } = useTranslation();

  return (
    <>
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
        <Box position={"relative"} w={"full"} h={"full"} style={{
          padding: "20px"
        }}>
          <figure class="tg-suitpart tg-suitbg">
            <Image
              width={"80%"}
              margin={"0 auto"}
              src={require("assets/customization/01_Front-BG.png")}
              alt="[+]"
            />
          </figure>
          <figure
            class="tg-suitpart "
            style={{
              zIndex: 2,
            }}
          >
            <Image
              width={"80%"}
              margin={"0 auto"}
              src={require("assets/customization/img-01.png")}
              alt="[+]"
            />
          </figure>
          <figure
            class="tg-suitpart "
            style={{
              zIndex: 3,
            }}
          >
            <Image
              width={"80%"}
              margin={"0 auto"}
              src={require("assets/customization/img-01-1.png")}
              alt="[+]"
            />
          </figure>
          <figure
            class="tg-suitpart "
            style={{
              zIndex: 4,
            }}
          >
            <Image
              width={"80%"}
              margin={"0 auto"}
              src={require("assets/customization/img-01-2.png")}
              alt="[+]"
            />
          </figure>
        </Box>
        <Box dir={i18n.dir()} borderLeft={"1px solid gray"}>
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
                borderBottom: "1px solid gray",
                height: "calc(100vh - 250px)",
                overflowY: "auto",
              }}
              sx={{
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <TabPanel>
                <Heading fontSize={20} py={4}>
                  {t("custom.tab1.subtitle")}
                </Heading>
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
                <Heading fontSize={20} py={4}>
                  {t("custom.tab2.subtitle")}
                </Heading>
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
                <Heading fontSize={20} py={4}>
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
                      <Flex bg={"gray.100"} p={4}>
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
                        <select class="form-select" aria-label="Default select example">
                          <option value="1">1 Button</option>
                          <option value="2">2 Buttons</option>
                          <option value="3">3 Buttons</option>
                          <option value="4">4 Double Breasted</option>
                          <option value="5">6 Double Breasted</option>
                          <option value="6">6 Double Breasted (2 Unfasten)</option>
                        </select>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                {/* Normal Pocket With Flaps
                Normal With Ticket Pocket
                Without Pocket
                Normal Pocket Without Flaps
                Slanted Pocket
                Slanted Pocket Without Flaps */}

                {/* Shawl
                Slim Notch
                Slim Peak
                Notch
                Peak */}
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
                <Heading fontSize={20} py={4}>
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
                      <Flex bg={"gray.100"} p={4}>
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
                <Heading fontSize={20} py={4}>
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
          <HStack width={"full"} p={4}>
            <HStack
              as={Button}
              float={"left"}
              onClick={() => handleTabsClick(-1)}
              style={
                tabIndex === 0 ? { pointerEvents: "none", opacity: "0.4" } : {}
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
                tabIndex === 4 ? { pointerEvents: "none", opacity: "0.4" } : {}
              }
            >
              <span>{t("custom.next")}</span>
              <ArrowForwardIcon />
            </HStack>
          </HStack>
          <HStack width={"full"}>
            <Spacer />
            <HStack float={"right"} className="buttonStyle">
              <span>{t("addToCart")}</span>
            </HStack>
          </HStack>
        </Box>
      </SimpleGrid>
    </>
  );
}
