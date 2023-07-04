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
import InputField from "components/InputField";
import i18n from "i18nConfig";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "variables/constants";
import { sendRequestWithToken } from "variables/functions";

export default function LoginCompoent() {
  const navigate = useNavigate();

  const { t } = useTranslation();
  const [otp, setOtp] = React.useState("");
  const [otpSent, setOtpSent] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
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
      sendRequestWithToken(
        {
          value: username,
          otp: otp,
        },
        `${apiUrl()}otpVerify`,
        "POST",
        ""
      )
        .then((data) => {
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
          }
        })
        .catch((error) => {
          console.log(error);
          toast({
            title: "Error",
            description: error.response.data.messages.error,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        });
    } else {
      if (loginType === "mobile") {
        sendRequestWithToken(
          {
            option: "mobile",
            value: username,
          },
          `${apiUrl()}login`,
          "POST",
          ""
        )
          .then((data) => {
            if (data.status === 200) {
              toast({
                title: "Success",
                description: "OTP Sent to your mobile",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
              setOtpSent(true);
            } else {
              toast({
                title: "Error",
                description: "This mobile number doesn't exist",
                status: "error",
                duration: 9000,
                isClosable: true,
              });
            }
          })
          .catch((error) => {
            console.log(error);
            toast({
              title: "Error",
              description: error.response.data.messages.error,
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          });
      } else {
        sendRequestWithToken(
          {
            email: username,
            password: password,
          },
          `${apiUrl()}loginEmail`,
          "POST",
          ""
        )
          .then((data) => {
            if (data.status === 200) {
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
          })
          .catch((error) => {
            console.log(error);
            toast({
              title: "Error",
              description: error.response.data.messages.error,
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          });
      }
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
              <>
                <InputField
                  isRequired={true}
                  type="email"
                  placeholder="Enter Email"
                  label="Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <InputField
                  isRequired={true}
                  type="password"
                  placeholder="Enter Password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </>
            ) : (
              <InputField
                isRequired={true}
                type="number"
                placeholder="phone number with country code"
                label="Phone Number"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            )}
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
