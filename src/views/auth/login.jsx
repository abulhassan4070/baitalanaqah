import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import i18n from "i18nConfig";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function LoginCompoent() {
  const { t } = useTranslation();
  return (
    <Flex
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      dir={i18n.dir()}
    >
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
        maxWidth={"100%"}
        width={"400px"}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>{t("ofLogin.login")}</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          width={"100%"}
          maxWidth={"400px"}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>{t("ofLogin.email")}</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>{t("ofLogin.password")}</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>{t("ofLogin.remember")}</Checkbox>
              </Stack>
              <Box
                className="buttonStyle"
                mb="0px"
                style={{
                  marginBottom: "0px",
                  marginTop: "10px",
                  fontSize: "14px",
                }}
              >
                {t("ofLogin.signin")}
              </Box>
              <Link
                to={"/forgot-password"}
                color={"blue.400"}
                style={{
                  marginBottom: "0px",
                  marginTop: "10px",
                  fontSize: "14px",
                }}
              >
                {t("ofLogin.forgot")}
              </Link>
              <Text mt="0px">
                {t("ofLogin.noAccount")} &nbsp;
                <Link to={"/register"} color={"blue.400"}>
                  {t("ofLogin.signup")}
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
