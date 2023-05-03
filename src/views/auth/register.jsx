import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import i18n from "i18nConfig";
import { useTranslation } from "react-i18next";

export default function RegistrationComponent() {
  const [showPassword, setShowPassword] = useState(false);
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
        py={12}
        px={6}
        maxWidth={"100%"}
        width={"400px"}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            {t("ofReg.register")}
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          maxWidth={"100%"}
          width={"400px"}
        >
          <Stack spacing={4}>
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4}>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>{t("ofReg.first")}</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>{t("ofReg.last")}</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </SimpleGrid>
            <FormControl id="email" isRequired>
              <FormLabel>{t("ofReg.email")}</FormLabel>
              <Input type="email" dir="ltr" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>{t("ofReg.password")}</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} dir="ltr" />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Box
                className="buttonStyle"
                mb="0px"
                style={{
                  marginBottom: "0px",
                  marginTop: "10px",
                  fontSize: "14px",
                }}
              >
                {t("ofReg.register")}
              </Box>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                {t("ofReg.already")} &nbsp;{" "}
                <Link to={"/login"} color={"black"}>
                  {t("ofReg.login")}
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
