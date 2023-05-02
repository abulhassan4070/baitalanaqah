import React from "react";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Image,
  useColorModeValue,
  HStack,
  Center,
  SimpleGrid,
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb,
  Container,
} from "@chakra-ui/react";

import tailor from "../../assets/img/tailor/tailor.png";
import facebook from "../../assets/img/tailor/facebook.png";
import twitter from "../../assets/img/tailor/twitter.png";
import linkedin from "../../assets/img/tailor/linkedin.png";
import instagram from "../../assets/img/tailor/instagram.png";
import { HeaderText } from "widgets/header";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";

export default function TailorsPage() {
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
              {t("tailors")}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <br />
        <HeaderText
          title={t("ofTailors.title")}
          subtitle={t("ofTailors.subtitle")}
        />
        <Center>
          <SimpleGrid
            px={6}
            py={12}
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={12}
          >
            <Preface />
            <Tailor />
            <Tailor />
            <Tailor />
            <Tailor />
            <Tailor />
          </SimpleGrid>
        </Center>
      </Container>
    </>
  );
}

function Preface() {
  const { t } = useTranslation();
  return (
    <>
      <Box
        maxW={"400px"}
        w={"full"}
        h={"493px"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
        p="32px"
      >
        <HStack>
          <Text
            mt="30px"
            display={"flex"}
            alignItems={"center"}
            textTransform={"uppercase"}
            _after={{
              content: `''`,
              flex: "1",
              ml: "8px",

              width: "16px",
              height: "1px",
              bgColor: "black",
            }}
          >
            {t("ofTailors.title")}
          </Text>
        </HStack>
        <Stack mt={"50px"}>
          <Heading>{t("ofTailors.text1")}</Heading>
          <Heading>{t("ofTailors.text2")}</Heading>
          <Heading>{t("ofTailors.text3")}</Heading>
          <Box>
            <Box
              display={"inline-block"}
              px="16px"
              py="8px"
              bg={"black"}
              color={"white"}
            >
              {t("appointments")}
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

function Tailor() {
  const { t } = useTranslation();
  return (
    <Box
      maxW={"400px"}
      w={"full"}
      h={"493px"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Image h={"360px"} w={"full"} src={tailor} objectFit={"cover"} />
      <Flex justify={"center"} mt={-6}>
        <HStack gap={2} bg={"white"} p={2}>
          <Image src={twitter} objectFit={"cover"} />
          <Image src={facebook} objectFit={"cover"} />
          <Image src={linkedin} objectFit={"cover"} />
          <Image src={instagram} objectFit={"cover"} />
        </HStack>
      </Flex>
      <Box p={6}>
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {t("ofTailors.name")}
          </Heading>
          <Text color={"gray.500"}>{t("ofTailors.experienced")}</Text>
        </Stack>
      </Box>
    </Box>
  );
}
