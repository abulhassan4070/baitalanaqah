// Chakra imports
import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Button,
  useToast,
  Input,
  InputGroup,
  FormLabel,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { AdminContext } from "contexts/AdminContext";
import React from "react";

import { setAdminDashData } from "variables/functions";
import { useLocation } from "react-router-dom";

export default function EditInvestor() {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const admin = React.useContext(AdminContext);

  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const toast = useToast();
  const search = useLocation().search;
  const adminid = new URLSearchParams(search).get("userid");
  React.useEffect(() => {
    setAdminDashData(
      admin.user.username,
      admin.user.token,
      "getInvestorDetails",
      {
        userid: adminid,
      }
    ).then((res) => {
      setUsername(res.data.username);
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.telephone);
      setPassword(res.data.password);
      setNewPassword(res.data.password);
    });
  }, [admin, adminid]);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card direction="column" w="100%">
        <Flex px="25px" justify="space-between" mb="20px" align="center">
          <Text
            color={textColor}
            fontSize="22px"
            fontWeight="700"
            lineHeight="100%"
          >
            {adminid ? "Update Investor" : "Add Investor"}
          </Text>
        </Flex>
        <Card direction="column" px="10px">
          <form>
            <FormLabel ms="4px" fontSize="sm" fontWeight="500" display="flex">
              Username<Text>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Enter your username"
                mb="24px"
                size="lg"
                type="text"
                variant="auth"
                fontWeight="500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputGroup>
            <FormLabel ms="4px" fontSize="sm" fontWeight="500" display="flex">
              Name<Text>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Enter your Name"
                mb="24px"
                size="lg"
                type="text"
                variant="auth"
                fontWeight="500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
            <FormLabel ms="4px" fontSize="sm" fontWeight="500" display="flex">
              Email<Text>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Enter your email"
                mb="24px"
                size="lg"
                type="email"
                variant="auth"
                fontWeight="500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            {adminid ? (
              <>
                <FormLabel
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  display="flex"
                >
              Change Password<Text>*</Text>
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    isRequired={true}
                    fontSize="sm"
                    placeholder="Enter investor password"
                    mb="24px"
                    size="lg"
                    type="text"
                    variant="auth"
                    fontWeight="500"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </InputGroup>
              </>
            ) : (
              <>
                <FormLabel
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  display="flex"
                >
                  Password<Text>*</Text>
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    isRequired={true}
                    fontSize="sm"
                    placeholder="Enter investor password"
                    mb="24px"
                    size="lg"
                    type="password"
                    variant="auth"
                    fontWeight="500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </>
            )}
            <FormLabel ms="4px" fontSize="sm" fontWeight="500" display="flex">
              Phone<Text>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Enter your phone"
                mb="24px"
                size="lg"
                type="text"
                variant="auth"
                fontWeight="500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputGroup>
            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              type="button"
              w="100%"
              h="50"
              mt="24px"
              onClick={(e) => {
                e.preventDefault();
                var emailRegex = new RegExp(
                  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
                );
                var phoneRegex = new RegExp("^[0-9]{10}$");
                if (name === "" || email === "" || phone === "") {
                  toast({
                    title: "Error",
                    description: "Please fill all the fields",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  });
                  return;
                }
                if (
                  emailRegex.test(email) === false ||
                  phoneRegex.test(phone) === false
                ) {
                  toast({
                    title: "Error",
                    description: "Please enter valid email and phone number",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  });
                  return;
                }
                setAdminDashData(
                  admin.user.username,
                  admin.user.token,
                  adminid ? "updateInvestor" : "addInvestor",
                  {
                    userid: adminid,
                    name: name,
                    email: email,
                    telephone: phone,
                    password: password,
                    changedPassword: newPassword,
                    username: username,
                  }
                ).then((res) => {
                  if (res.error.code !== "#200") {
                    toast({
                      title: "Error",
                      description: res.error.description,
                      status: "error",
                      duration: 9000,
                      isClosable: true,
                    });
                  } else {
                    toast({
                      title: "Success",
                      description: "Investor updated successfully",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    });
                  }
                });
              }}
            >
              {adminid ? "Update Investor" : "Add Investor"}
            </Button>
          </form>
        </Card>
      </Card>
    </Box>
  );
}
