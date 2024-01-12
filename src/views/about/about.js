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
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";
export default function AboutPage() {
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
              {t("ourTeam")}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <br />
        <HeaderText title={t("ourTeam")} subtitle={t("ofAboutUs.subtitle")} />
        <div class="responsive-container-block Container bottomContainer">
          <div class="ultimateImg">
            <Image
              class="mainImg"
              src="https://images.unsplash.com/photo-1633655442432-620aa55d7ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            />
            <div class="purpleBox">
              <p class="purpleText">{t("ofAboutUs.lorem")}</p>
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
                {t("title")},
              </Text>
            </Heading>
            <Text color={"gray.500"}>{t("ofAboutUs.text1")}</Text>
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
                {t("ofAboutUs.item2.part1")} <br />
                {t("ofAboutUs.item2.part2")}
              </Text>
            </Heading>
            <p>{t("ofAboutUs.item2.text")}</p>
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
                {t("ofAboutUs.item3.part1")}
                <br /> {t("ofAboutUs.item3.part2")}
              </Text>
            </Heading>
            <p>{t("ofAboutUs.item3.text")}</p>
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
                {t("ofAboutUs.item4.part1")}
                <br />
                {t("ofAboutUs.item4.part2")}
              </Text>
            </Heading>
            <p>{t("ofAboutUs.item4.text")}</p>
          </Box>
        </SimpleGrid>
        <br />
        <br />
        <HeaderText
          title={t("ofAboutUs.faq.title")}
          subtitle={t("ofAboutUs.faq.subtitle")}
        />
        <br />
        <Accordion defaultIndex={[0]} allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <h1>Do you provide Corporate Services?</h1>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Bait Al Anaqah Corporate Service invites companies and
              organizations to dress employees and participants cohesively for
              events and fairs. We assist in selecting the perfect fit and
              fabric from our diverse range, tailoring the experience with
              personalized measurements or by following standard sizing.
              <br />
              Ensuring convenience and tailored solutions to meet your corporate
              dressing needs.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </>
  );
}
