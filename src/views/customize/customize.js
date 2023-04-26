import { ChevronRightIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HeaderText } from "widgets/header";
import { useRef } from "react";
import "../../assets/css/customize.css";

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
          ></VStack>
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
            <Tabs isFitted w={"full"} h={"max-content"}>
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
                  <Heading>Select your Fabric</Heading>
                  <Button>Filters</Button>
                  <SimpleGrid columns={2} spacing={2}>
                    <Box bg={"green"} height={"100px"}></Box>
                    <Box bg={"red"} height={"100px"}></Box>
                    <Box bg={"green"} height={"100px"}></Box>
                    <Box bg={"red"} height={"100px"}></Box>
                    <Box bg={"green"} height={"100px"}></Box>
                    <Box bg={"red"} height={"100px"}></Box>
                    <Box bg={"green"} height={"100px"}></Box>
                    <Box bg={"red"} height={"100px"}></Box>
                    <Box bg={"green"} height={"100px"}></Box>
                    <Box bg={"red"} height={"100px"}></Box>
                  </SimpleGrid>
                </TabPanel>
                <TabPanel>
                  <Heading>Select your Lining</Heading>
                  <Button>Filters</Button>
                  <SimpleGrid columns={2} spacing={2}>
                    <Box bg={"blue"} height={"100px"}></Box>
                    <Box bg={"red"} height={"100px"}></Box>
                    <Box bg={"blue"} height={"100px"}></Box>
                    <Box bg={"red"} height={"100px"}></Box>
                    <Box bg={"blue"} height={"100px"}></Box>
                    <Box bg={"red"} height={"100px"}></Box>
                    <Box bg={"blue"} height={"100px"}></Box>
                    <Box bg={"red"} height={"100px"}></Box>
                    <Box bg={"blue"} height={"100px"}></Box>
                    <Box bg={"red"} height={"100px"}></Box>
                  </SimpleGrid>
                </TabPanel>
                <TabPanel>
                  <Heading>Select your Jacket</Heading>
                  <Accordion allowToggle>
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
                  <Heading>Select your Trousers</Heading>
                </TabPanel>
                <TabPanel>
                  <Heading>Your Summary</Heading>
                </TabPanel>
              </TabPanels>
            </Tabs>
            <VStack
              width={"full"}
              style={{
                position: "sticky",
                height: "75px",
                top: "calc(100% - 75px)",
              }}
              px={4}
              borderTop={"1px solid black"}
            >
              <HStack width={"full"}>
                <HStack float={"left"}>
                  <span>PREV</span>
                </HStack>
                <Spacer />
                <HStack float={"right"}>
                  <span>NEXT</span>
                </HStack>
              </HStack>
              <HStack width={"full"}>
                <HStack float={"left"}>
                  <span>$1,495</span>
                  <span>Shipping info</span>
                </HStack>
                <Spacer />
                <HStack float={"right"}>
                  <span>HeartIcon</span>
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