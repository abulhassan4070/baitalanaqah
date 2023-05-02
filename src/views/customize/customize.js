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

  return (
    <>
      <Container maxW={"7xl"} p="12">
        <Breadcrumb
          fontWeight="medium"
          fontSize="sm"
          spacing="8px"
          textTransform="uppercase"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink color="gray.500" style={{ textDecoration: "none" }}>
              <NavLink to="/">Home</NavLink>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink style={{ textDecoration: "none" }}>
              Customize
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <br />
        <HeaderText title="Customize" subtitle="Customizing suits" />
      </Container>
      <Container maxW={"container.xl"} p={0}>
        <Flex h={"100vh"} p={0}>
          <VStack
            w="full"
            h="full"
            alignItems={"flex-start"}
            border={"1px solid black"}
          >
            <Box position={"relative"} w={"full"} h={"full"}>
              <Box position={"absolute"} top={10} left={10}>
                <Select variant={"unstyled"} fontSize={20}>
                  <option value="option1">Abaya</option>
                  <option value="option2">Suits</option>
                  <option value="option3">Shirts</option>
                  <option value="option4">Jackets</option>
                  <option value="option5">Blazers</option>
                  <option value="option6">Trousers</option>
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
          >
            <div ref={overlayRef} className="overlay">
              <Button onClick={closeSearch}>{"<"}</Button>
              <div className="text" onClick={closeSearch}>
                Hello World
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
                <Tab>Fabric</Tab>
                <Tab>Lining</Tab>
                <Tab>Jacket</Tab>
                <Tab>Trousers</Tab>
                <Tab>Summary</Tab>
              </TabList>

              <TabPanels
                style={{
                  position: "sticky",
                  height: "400px",
                  top: "calc(100% - 400px)",
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
                    Select your Fabric
                  </Heading>
                  <Button>Filters</Button>
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
                    Select your Lining
                  </Heading>
                  <Button>Filters</Button>
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
                    Select your Jacket
                  </Heading>
                  <Accordion allowToggle defaultIndex={[0]}>
                    <AccordionItem bg={"gray.200"} mb={8}>
                      <h2>
                        <AccordionButton p={4}>
                          <Flex w="full">
                            <Box as="span" flex="1" textAlign="left">
                              Style
                            </Box>
                            <Box as="span" flex="1" textAlign="right">
                              2 Button
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
                            Canvas
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            Half
                          </Box>
                        </Flex>
                        <Flex bg={"gray.100"} mt={4} p={4}>
                          <Box as="span" flex="1" textAlign="left">
                            Closure
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            2 Button
                          </Box>
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg={"gray.200"} mb={8}>
                      <h2>
                        <AccordionButton p={4}>
                          <Flex w="full">
                            <Box as="span" flex="1" textAlign="left">
                              Lapel
                            </Box>
                            <Box as="span" flex="1" textAlign="right">
                              Notch 9 cm / 3 1/2 in (Standard)
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
                            Lapel
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            Notch 9 cm / 3 1/2 in (Standard)
                          </Box>
                        </Flex>
                        <Flex bg={"gray.100"} mt={4} p={4}>
                          <Box as="span" flex="1" textAlign="left">
                            Lapel Buttonhole
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            Left
                          </Box>
                        </Flex>
                        <Flex bg={"gray.100"} mt={4} p={4}>
                          <Box as="span" flex="1" textAlign="left">
                            Lapel Buttonhole Style
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            Normal
                          </Box>
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </TabPanel>
                <TabPanel>
                  <Heading fontSize={16} py={4}>
                    Select your Trousers
                  </Heading>
                  <Accordion allowToggle defaultIndex={[0]}>
                    <AccordionItem bg={"gray.200"} mb={8}>
                      <h2>
                        <AccordionButton p={4}>
                          <Flex w="full">
                            <Box as="span" flex="1" textAlign="left">
                              Style
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
                            Pleat Quantity
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            1 Pleat
                          </Box>
                        </Flex>
                        <Flex bg={"gray.100"} mt={4} p={4}>
                          <Box as="span" flex="1" textAlign="left">
                            Pant Crease
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            Without Crease
                          </Box>
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg={"gray.200"} mb={8}>
                      <h2>
                        <AccordionButton p={4}>
                          <Flex w="full">
                            <Box as="span" flex="1" textAlign="left">
                              Waistband
                            </Box>
                            <Box as="span" flex="1" textAlign="right">
                              Belt Loops
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
                            Waistband Closure
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            Extension With Button and Hook
                          </Box>
                        </Flex>
                        <Flex bg={"gray.100"} mt={4} p={4}>
                          <Box as="span" flex="1" textAlign="left">
                            Waistband Style
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            Belt Loops
                          </Box>
                        </Flex>
                        <Flex bg={"gray.100"} mt={4} p={4}>
                          <Box as="span" flex="1" textAlign="left">
                            Suspender Buttons
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            Suspender Buttons
                          </Box>
                        </Flex>
                        <Flex bg={"gray.100"} mt={4} p={4}>
                          <Box as="span" flex="1" textAlign="left">
                            Waistband V-split
                          </Box>
                          <Box as="span" flex="1" textAlign="right">
                            No waistband V-split
                          </Box>
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </TabPanel>
                <TabPanel>
                  <Heading fontSize={20} py={4}>
                    Your Summary
                  </Heading>
                  <Heading fontSize={16} py={4}>
                    FABRIC
                  </Heading>
                  <Text fontSize={18}>Fabric</Text>
                  <Flex
                    fontSize={14}
                    mt={4}
                    pb={3}
                    borderBottom={"1px"}
                    borderColor={"gray.200"}
                  >
                    <Box as="span" flex="1" textAlign="left" color={"gray.500"}>
                      FABRIC
                    </Box>
                    <Box as="span" flex="1" textAlign="right">
                      Super 150's Wool Blue Sharkskin
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
                      FABRIC ID
                    </Box>
                    <Box as="span" flex="1" textAlign="right">
                      TGES219
                    </Box>
                  </Flex>
                  <Heading fontSize={16} py={4} mt={4}>
                    LINING
                  </Heading>
                  <Text fontSize={18}>Lining</Text>
                  <Flex
                    fontSize={14}
                    mt={4}
                    pb={3}
                    borderBottom={"1px"}
                    borderColor={"gray.200"}
                  >
                    <Box as="span" flex="1" textAlign="left" color={"gray.500"}>
                      LINING
                    </Box>
                    <Box as="span" flex="1" textAlign="right">
                      Silver Solid
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
                      LINING ID
                    </Box>
                    <Box as="span" flex="1" textAlign="right">
                      TR148
                    </Box>
                  </Flex>
                  <Heading fontSize={16} py={4} mt={4}>
                    JACKET
                  </Heading>
                  <Text fontSize={18}>Style</Text>
                  <Flex
                    fontSize={14}
                    mt={4}
                    pb={3}
                    borderBottom={"1px"}
                    borderColor={"gray.200"}
                  >
                    <Box as="span" flex="1" textAlign="left" color={"gray.500"}>
                      CANVAS
                    </Box>
                    <Box as="span" flex="1" textAlign="right">
                      Half
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
                      CLOSURE
                    </Box>
                    <Box as="span" flex="1" textAlign="right">
                      2 Button
                    </Box>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
            <VStack
              pt={2}
              width={"full"}
              style={{
                position: "sticky",
                height: "120px",
                top: "calc(100% - 120px)",
              }}
              px={4}
              borderTop={"1px solid black"}
            >
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
                  <span>PREV</span>
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
                  <span>NEXT</span>
                  <ArrowForwardIcon />
                </HStack>
              </HStack>
              <HStack width={"full"}>
                <HStack float={"left"}>
                  <span className="buttonStyle">$1,495</span>
                  <span className="buttonStyle">Shipping info</span>
                </HStack>
                <Spacer />
                <HStack float={"right"} className="buttonStyle">
                  <span>ADD TO BAG</span>
                </HStack>
              </HStack>
            </VStack>
          </VStack>
        </Flex>
      </Container>
    </>
  );
}
