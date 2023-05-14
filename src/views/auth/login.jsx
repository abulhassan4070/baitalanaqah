import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  useColorModeValue,
  useToast,
  Radio,
  RadioGroup,
  Box,
  Text,
} from "@chakra-ui/react";
import i18n from "i18nConfig";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { getOtpFromServer } from "variables/functions";
import { getLoginFromServer } from "variables/functions";

export default function LoginCompoent() {
  const navigate = useNavigate();

  const { t } = useTranslation();
  const [otp, setOtp] = React.useState("");
  const [otpSent, setOtpSent] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [loginType, setLoginType] = React.useState("email");
  const toast = useToast();
  React.useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/profile", { replace: true });
    }
  }, [navigate]);
  function submitForm(e) {
    e.preventDefault();
    if (otpSent) {
      getLoginFromServer(username, otp).then((data) => {
        var jsonData = data.data;
        console.log(jsonData);
        if (jsonData === undefined) {
          toast({
            title: "Error",
            description: "OTP doesn't match",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        } else {
          if (jsonData.role === "1" || jsonData.role === "2") {
            toast({
              title: "Success",
              description: "Login Successful",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            localStorage.setItem("token", jsonData.token);
            localStorage.setItem("userdata", JSON.stringify(jsonData));
            navigate("/profile", { replace: true });
          } else {
            toast({
              title: "Error",
              description: "You dont have access to this panel",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        }
      });
    } else {
      getOtpFromServer(username, loginType).then((data) => {
        if (data.data === '"Success"' || data.data === "Success") {
          toast({
            title: "Success",
            description: "OTP Sent to your " + loginType,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setOtpSent(true);
        } else {
          toast({
            title: "Error",
            description: "This " + loginType + " doesn't exist",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      });
    }
  }
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
        <Heading fontSize={"4xl"}>{t("ofLogin.login")}</Heading>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          width={"100%"}
          maxWidth={"400px"}
        >
          <FormLabel>Login with </FormLabel>
          <RadioGroup
            defaultValue={loginType}
            onChange={() => {
              setOtpSent(false);
              setLoginType(loginType === "email" ? "mobile" : "email");
            }}
          >
            <Stack spacing={5} direction="row">
              <Radio colorScheme="blue" value="email">
                Email
              </Radio>
              <Radio colorScheme="blue" value="mobile">
                Phone Number
              </Radio>
            </Stack>
          </RadioGroup>
          <br />
          <form onSubmit={submitForm}>
            {loginType === "email" ? (
              <Input
                isRequired={true}
                type="email"
                placeholder="email address"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            ) : (
              <Input
                isRequired={true}
                type="number"
                placeholder="phone number with country code"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            )}
            <br />
            {otpSent && (
              <>
                <FormControl id="otp">
                  <FormLabel>OTP</FormLabel>
                  <Input
                    type="number"
                    isRequired={true}
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </FormControl>
              </>
            )}
            <Stack spacing={6}>
              <Box
                className="buttonStyle small"
                mb="0px"
                style={{
                  marginBottom: "0px",
                  marginTop: "10px",
                  fontSize: "14px",
                }}
                onClick={submitForm}
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
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
