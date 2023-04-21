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
} from "@chakra-ui/react";

import tailor from "../../assets/img/tailor/tailor.png";
import facebook from "../../assets/img/tailor/facebook.png";
import twitter from "../../assets/img/tailor/twitter.png";
import linkedin from "../../assets/img/tailor/linkedin.png";
import instagram from "../../assets/img/tailor/instagram.png";

export default function TailorsPage() {
  return (
    <>
      <Center>
        <Heading mt={"16px"}>See our Hardworking Tailors</Heading>
      </Center>
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
    </>
  );
}

function Preface() {
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
            Our Tailors
          </Text>
        </HStack>
        <Stack mt={"50px"}>
          <Heading>Meet Our</Heading>
          <Heading>Experienced</Heading>
          <Heading>Tailors</Heading>

          <Box>
            <Box
              display={"inline-block"}
              px="16px"
              py="8px"
              bg={"black"}
              color={"white"}
            >
              Appointment
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

function Tailor() {
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
            Mohammad Ismail
          </Heading>
          <Text color={"gray.500"}>Senior Tailor</Text>
        </Stack>
      </Box>
    </Box>
  );
}
