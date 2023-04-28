import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Text,
  Heading,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  AccordionPanel,
  SimpleGrid,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { HeaderText } from "widgets/header";
import clothing from "../../assets/img/clothing.webp";
import technology from "../../assets/img/advancedtech.webp";
import smartchoice from "../../assets/img/smartchoice.webp";
export default function AboutPage() {
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
              Our Story
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <br />
        <HeaderText title="Our Story" subtitle="The story of our brand" />
        <div class="responsive-container-block Container bottomContainer">
          <div class="ultimateImg">
            <Image
              class="mainImg"
              src="https://images.unsplash.com/photo-1633655442432-620aa55d7ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            />
            <div class="purpleBox">
              <p class="purpleText">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
              <Flex class="stars">
                <Icon
                  icon="material-symbols:star-rounded"
                  fontSize={30}
                  color={"black"}
                />
                <Icon
                  icon="material-symbols:star-rounded"
                  fontSize={30}
                  color={"black"}
                />
                <Icon
                  icon="material-symbols:star-rounded"
                  fontSize={30}
                  color={"black"}
                />
                <Icon
                  icon="material-symbols:star-rounded"
                  fontSize={30}
                  color={"black"}
                />
                <Icon
                  icon="material-symbols:star-rounded"
                  fontSize={30}
                  color={"black"}
                />
              </Flex>
            </div>
          </div>
          <div class="allText bottomText">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            >
              <Text as={"span"} position={"relative"}>
                Bait Al Anaqah,
              </Text>
            </Heading>
            <Text color={"gray.500"}>
              Welcome to Bait Al Anaqah, where we embody the spirit of luxury
              and sophistication in everything we do. Our story began with a
              passion for creating beautiful, high-quality apparel that exudes
              elegance and style.
            </Text>
          </div>
        </div>
        <SimpleGrid className="section" columns={{ base: 1, md: 2 }}>
          <Box padding={"20px"}>
            <Box
              minHeight={{ base: "200px", md: "400px" }}
              width={{ base: "100%", md: "100%" }}
              style={{
                backgroundImage: `url(${clothing})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            >
              <Text as={"span"} position={"relative"}>
                CLOTHING MADE <br />
                FOR YOU
              </Text>
            </Heading>
            <p>
              Say goodbye to mass-produced clothing and hello to clothing made
              by you, for you. We make sure you feel as good as you look wearing
              custom-tailored clothing true to your unique fit and style. Don’t
              let your clothing decide who you are; decide it for yourself.
            </p>
          </Box>
        </SimpleGrid>
        <SimpleGrid className="section" columns={{ base: 1, md: 2 }} style={{}}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign={"right"}
          >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            >
              <Text as={"span"} position={"relative"}>
                A smarter
                <br /> choice
              </Text>
            </Heading>
            <p>
              We’re far from an ordinary clothing company. We only produce by
              order and keep no inventory, resulting in less waste and excessive
              production. We take pride in fully owning and operating our
              facilities, ensuring responsible and fair production.
            </p>
          </Box>
          <Box padding={"20px"}>
            <Box
              minHeight={{ base: "200px", md: "400px" }}
              width={{ base: "100%", md: "100%" }}
              style={{
                backgroundImage: `url(${smartchoice})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Box>
        </SimpleGrid>
        <SimpleGrid className="section" columns={{ base: 1, md: 2 }}>
          <Box padding={"20px"}>
            <Box
              minHeight={{ base: "200px", md: "400px" }}
              width={{ base: "100%", md: "100%" }}
              style={{
                backgroundImage: `url(${technology})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            >
              <Text as={"span"} position={"relative"}>
                Advanced
                <br />
                technology
              </Text>
            </Heading>
            <p>
              We like to describe ourselves as a tech company that does custom
              clothing. Using advanced technology and algorithms, we provide you
              with the fit of a lifetime.
            </p>
          </Box>
        </SimpleGrid>
        <br />
        <br />
        <HeaderText title="FAQ" subtitle="Frequently asked questions" />
        <br />
        <Accordion defaultIndex={[0]} allowToggle>
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <h1>Question no. {item}</h1>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Container>
    </>
  );
}
