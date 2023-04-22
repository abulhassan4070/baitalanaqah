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
import { Link } from "react-router-dom";

export default function LoginCompoent() {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
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
          <Heading fontSize={"4xl"}>Login</Heading>
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
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
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
                Sign in
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
                Forgot password?
              </Link>
              <Text mt="0px">
                Don't have an account? &nbsp;
                <Link to={"/register"} color={"blue.400"}>
                  Sign up
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
