import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Box,
  FormLabel,
} from "@chakra-ui/react";

export default function ForgotComponent(): JSX.Element {
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
          <Heading fontSize={"4xl"}>Reset password</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          width={"100%"}
          maxWidth={"400px"}
        >
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
            />
          </FormControl>
          <br />
          <Stack spacing={6}>
            <Button
              bg={"black"}
              color={"white"}
              _hover={{
                bg: "black",
              }}
            >
              Request Reset
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
