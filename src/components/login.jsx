import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function SimpleCard() {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
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
                <Link to={"/forgot-password"} color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"black"}
                color={"white"}
                _hover={{
                  bg: "black",
                }}
              >
                Sign in
              </Button>
              <Text>
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
