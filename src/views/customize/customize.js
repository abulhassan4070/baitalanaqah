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
  Icon,
  TabIndicator,
} from "@chakra-ui/react";
import { useState } from "react";
import "../../assets/css/customize.css";
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";

import btn1 from "assets/customization/button-1.png";
import btn2 from "assets/customization/button-2.png";
import btn3 from "assets/customization/button-3.png";
import btn4 from "assets/customization/button-4.png";
import btn5 from "assets/customization/button-5.png";
import btn6 from "assets/customization/button-6.png";

import lapel1 from "assets/customization/lapel-1.png";
import lapel2 from "assets/customization/lapel-2.png";
import lapel3 from "assets/customization/lapel-3.png";
import lapel4 from "assets/customization/lapel-4.png";
import lapel5 from "assets/customization/lapel-5.png";

import pocket1 from "assets/customization/pocket-1.png";
import pocket2 from "assets/customization/pocket-2.png";
import pocket3 from "assets/customization/pocket-3.png";
import pocket4 from "assets/customization/pocket-4.png";
import pocket5 from "assets/customization/pocket-5.png";
import pocket6 from "assets/customization/pocket-6.png";

export default function CustomizePage() {
  const [tabIndex, setTabIndex] = useState(0);
  var buttons = [btn1, btn2, btn3, btn4, btn5, btn6];
  var lapels = [lapel1, lapel2, lapel3, lapel4, lapel5];
  var pockets = [pocket1, pocket2, pocket3, pocket4, pocket5, pocket6];

  var fabrics = [
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/894_huge_c300.jpg",
      name: "Oberon",
      price: "219€",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/141_huge_c300.jpg",
      name: "Sicilian Grey",
      price: "219€",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/674_huge_c300.jpg",
      name: "Blackpool",
      price: "219€",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/2191_huge_c300.jpg",
      name: "Karels",
      price: "219€",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/2197_huge_c300.jpg",
      name: "Blazies",
      price: "219€",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/2192_huge_c300.jpg",
      name: "Sunders",
      price: "219€",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/2103_huge_c300.jpg",
      name: "Hurley",
      price: "219€",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/2251_huge_c300.jpg",
      name: "Delli Colli",
      price: "219€",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/2277_huge_c300.jpg",
      name: "Kawashima",
      price: "219€",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/3186_huge_c300.jpg",
      name: "Cheviot",
      price: "219€",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/3179_huge_c300.jpg",
      name: "Sheadgod",
      price: "219€",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/3161_huge_c300.jpg",
      name: "Chaucer",
      price: "219€",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/1645_huge_c300.jpg",
      name: "Wenmore",
      price: "219€",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/2311_huge_c300.jpg",
      name: "Webster",
      price: "219€",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/778_huge_c300.jpg",
      name: "Wickford",
      price: "219€",
    },
  ];

  var lining = [
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/134_normal.jpg",
      name: "Jumbie",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/100_normal.jpg",
      name: "Volda",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/101_normal.jpg",
      name: "Gloppen",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/132_normal.jpg",
      name: "Hunter",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/104_normal.jpg",
      name: "Vestnes",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/102_normal.jpg",
      name: "Kallset",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/103_normal.jpg",
      name: "Roald",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/133_normal.jpg",
      name: "Merlin",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/171_normal.jpg",
      name: "Doran",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/168_normal.jpg",
      name: "Battler",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/189_normal.jpg",
      name: "Zain",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/217_normal.jpg",
      name: "Hari",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/219_normal.jpg",
      name: "Evie",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/79_normal.jpg",
      name: "Porlens",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/218_normal.jpg",
      name: "Zubair",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/215_normal.jpg",
      name: "Swanson",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/216_normal.jpg",
      name: "Halliday",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/214_normal.jpg",
      name: "Erickson",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/184_normal.jpg",
      name: "Charlotte",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/165_normal.jpg",
      name: "Timur",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/111_normal.jpg",
      name: "Lipari",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/175_normal.jpg",
      name: "Hagen",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/169_normal.jpg",
      name: "Aybek",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/172_normal.jpg",
      name: "Jinny",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/164_normal.jpg",
      name: "Darina",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/167_normal.jpg",
      name: "Hilda",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/222_normal.jpg",
      name: "Parkleys",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/136_normal.jpg",
      name: "Branson",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/224_normal.jpg",
      name: "Claydens",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/213_normal.jpg",
      name: "Kairo",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/220_normal.jpg",
      name: "Boyles",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/227_normal.jpg",
      name: "Dorsets",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/228_normal.jpg",
      name: "Azuras",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/194_normal.jpg",
      name: "Laxton",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/196_normal.jpg",
      name: "Beray",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/159_normal.jpg",
      name: "Azura",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/221_normal.jpg",
      name: "Swaless",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/231_normal.jpg",
      name: "Denholms",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/161_normal.jpg",
      name: "Shatle",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/230_normal.jpg",
      name: "Tindalls",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/223_normal.jpg",
      name: "Shelleys",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/198_normal.jpg",
      name: "Crosby",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/229_normal.jpg",
      name: "Graunds",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/191_normal.jpg",
      name: "Milne",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/233_normal.jpg",
      name: "Bradlys",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/235_normal.jpg",
      name: "Orviles",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/143_normal.jpg",
      name: "Rischer",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/152_normal.jpg",
      name: "Verrall",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/157_normal.jpg",
      name: "Tera",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/162_normal.jpg",
      name: "Gritt",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/192_normal.jpg",
      name: "Fearne",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/193_normal.jpg",
      name: "Hensonn",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/195_normal.jpg",
      name: "Lacey",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/197_normal.jpg",
      name: "Munroe",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/199_normal.jpg",
      name: "Snella",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/200_normal.jpg",
      name: "Rayner",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/226_normal.jpg",
      name: "Horsts",
    },
    {
      image:
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/lining/default/234_normal.jpg",
      name: "Newburys",
    },
  ];
  const [buttonImg, setButtonImg] = useState(0);
  const [lapelImg, setLapelImg] = useState(0);
  const [pocketImg, setPocketImg] = useState(0);
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
        <Box
          position={"relative"}
          w={"full"}
          h={"full"}
          style={{
            padding: "20px",
          }}
        >
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
              src={lapels[lapelImg]}
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
              src={pockets[pocketImg]}
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
              src={buttons[buttonImg]}
              alt="[+]"
            />
          </figure>
        </Box>
        <Box dir={i18n.dir()} borderLeft={"1px solid gray"}>
          <Tabs
            w={"full"}
            h={"max-content"}
            isLazy
            index={tabIndex}
            _activeLink={{
              bg: "gray.200",
            }}
            variant="soft-rounded"
            onChange={handleTabsChange}
          >
            {" "}
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="black"
              borderRadius="1px"
            />
            <TabList
              p={4}
              borderBottom={"1px solid gray"}
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Tab>{t("custom.tab1.title")}</Tab>
              <Icon as={ArrowForwardIcon} />
              <Tab>{t("custom.tab2.title")}</Tab>
              <Icon as={ArrowForwardIcon} />
              <Tab>{t("custom.tab3.title")}</Tab>
              <Icon as={ArrowForwardIcon} />
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
                <SimpleGrid
                  columns={{
                    base: 2,
                    md: 3,
                    lg: 4,
                  }}
                  spacing={2}
                  py={4}
                >
                  {fabrics.map((fabric, index) => (
                    <Box height={"200px"} bgSize={"cover"} key={index}>
                      <Image
                        src={fabric.image}
                        alt="[+]"
                        height={"calc(100% - 50px)"}
                        width={"100%"}
                      />
                      <Flex
                        bg={"gray.100"}
                        p={2}
                        borderTop={"1px dashed black"}
                      >
                        <Text
                          fontSize={14}
                          flex="1"
                          textAlign="left"
                          noOfLines={1}
                        >
                          {fabric.name}
                        </Text>
                        <Box as="span" flex="1" textAlign="right">
                          {fabric.price}
                        </Box>
                      </Flex>
                    </Box>
                  ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <Heading fontSize={20} py={4}>
                  {t("custom.tab2.subtitle")}
                </Heading>
                <SimpleGrid
                  columns={{
                    base: 2,
                    md: 3,
                    lg: 4,
                  }}
                  spacing={2}
                  py={4}
                >
                  {lining.map((fabric, index) => (
                    <Box height={"200px"} bgSize={"cover"} key={index}>
                      <Image
                        src={fabric.image}
                        alt="[+]"
                        height={"calc(100% - 50px)"}
                        width={"100%"}
                      />
                      <Flex
                        bg={"gray.100"}
                        p={2}
                        borderTop={"1px dashed black"}
                      >
                        <Text
                          fontSize={14}
                          flex="1"
                          textAlign="left"
                          noOfLines={1}
                        >
                          {fabric.name}
                        </Text>
                        <Box as="span" flex="1" textAlign="right">
                          {fabric.price}
                        </Box>
                      </Flex>
                    </Box>
                  ))}
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
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option value="1">Half</option>
                          <option value="2">Semi-full</option>
                          <option value="3">Full</option>
                        </select>
                      </Flex>
                      <Flex bg={"gray.100"} mt={4} p={4}>
                        <Box as="span" flex="1" textAlign="left">
                          {t("custom.tab3.label1-2")}
                        </Box>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          onChange={(e) =>
                            setButtonImg(parseInt(e.target.value) - 1)
                          }
                        >
                          <option value="1">1 Button</option>
                          <option value="2">2 Buttons</option>
                          <option value="3">3 Buttons</option>
                          <option value="4">4 Double Breasted</option>
                          <option value="5">6 Double Breasted</option>
                          <option value="6">
                            6 Double Breasted (2 Unfasten)
                          </option>
                        </select>
                      </Flex>
                      <Flex bg={"gray.100"} mt={4} p={4}>
                        <Box as="span" flex="1" textAlign="left">
                          {t("custom.tab3.label2")}
                        </Box>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          onChange={(e) =>
                            setLapelImg(parseInt(e.target.value) - 1)
                          }
                        >
                          <option value="1">Shawl</option>
                          <option value="2">Slim Notch</option>
                          <option value="3">Slim Peak</option>
                          <option value="4">Notch</option>
                          <option value="5">Peak</option>
                        </select>
                      </Flex>

                      <Flex bg={"gray.100"} mt={4} p={4}>
                        <Box as="span" flex="1" textAlign="left">
                          Pockets
                        </Box>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          onChange={(e) =>
                            setPocketImg(parseInt(e.target.value) - 1)
                          }
                        >
                          <option value="1">Normal Pocket With Flaps</option>
                          <option value="2">Normal With Ticket Pocket</option>
                          <option value="3">Without Pocket</option>
                          <option value="4">Normal Pocket Without Flaps</option>
                          <option value="5">Slanted Pocket</option>
                        </select>
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
          <HStack width={"full"} p={2}>
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
                tabIndex === 3 ? { pointerEvents: "none", opacity: "0.4" } : {}
              }
            >
              <span>{t("custom.next")}</span>
              <ArrowForwardIcon />
            </HStack>
          </HStack>
          <HStack float={"right"} className="buttonStyle" mx={2}>
            <span>{t("addToCart")}</span>
            <ArrowForwardIcon />
          </HStack>
        </Box>
      </SimpleGrid>
    </>
  );
}
