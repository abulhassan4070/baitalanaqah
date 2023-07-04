import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import i18n from "i18nConfig";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl } from "variables/constants";
import { sendRequestWithToken } from "variables/functions";

export default function RegistrationComponent() {
  const navigate = useNavigate();

  const { t } = useTranslation();
  const [otp, setOtp] = React.useState("");
  const [otpSent, setOtpSent] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
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
          value: phone,
          otp: otp,
        },
        `${apiUrl()}registerOtpVerify`,
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
      if (name === "") {
        toast({
          title: "Error",
          description: "Please Enter Name",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      if (email === "") {
        toast({
          title: "Error",
          description: "Please Enter Email",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      if (phone === "") {
        toast({
          title: "Error",
          description: "Please Enter Phone Number",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      sendRequestWithToken(
        {
          fullName: name,
          email: email,
          mobile: phone,
          password: password,
        },
        `${apiUrl()}register`,
        "POST",
        ""
      )
        .then((data) => {
          if (data.data.status === 200) {
            toast({
              title: "Success",
              description: "OTP Sent to your mobile number",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            setOtpSent(true);
          } else {
            toast({
              title: "Error",
              description: "Something went wrong",
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
  return (
    <Flex align={"center"} justify={"center"} dir={i18n.dir()}>
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
          boxShadow={"lg"}
          p={8}
          maxWidth={"100%"}
          width={"400px"}
        >
          <Stack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                isRequired={true}
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>{t("ofReg.email")}</FormLabel>{" "}
              <Input
                isRequired={true}
                type="email"
                placeholder="email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                isRequired={true}
                type="number"
                placeholder="phone number with country code"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                isRequired={true}
                type="password"
                placeholder="Please enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
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
            <Stack spacing={10} pt={2}>
              <Box
                className="buttonStyle"
                mb="0px"
                style={{
                  marginBottom: "0px",
                  marginTop: "10px",
                  fontSize: "14px",
                }}
                onClick={(e) => submitForm(e)}
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
