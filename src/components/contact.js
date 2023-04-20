import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Stack,
  AspectRatio,
  Center,
} from "@chakra-ui/react";

import { MdEmail, MdPhone, MdLocationPin, MdAccessTime } from "react-icons/md";

export default function Contact() {
  return (
    <>
      <Center>
        <Heading>Contact Us</Heading>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} p={5}>
        <SimpleGrid columns={{ base: 2, md: 2 }} gap={5}>
          <Stack bgColor={"gray.200"} p={5}>
            <Box as={MdLocationPin} size="40px" color={"blue.500"} />
            <Text fontWeight={"bold"} fontSize={18}>
              Address
            </Text>
            <Text fontSize={12}>SPK College</Text>
            <Text fontSize={12}>Alwarkurichi, Tenkasi</Text>
          </Stack>
          <Stack bgColor={"gray.200"} p={5}>
            <Box as={MdPhone} size="40px" color={"blue.500"} />
            <Text fontWeight={"bold"} fontSize={18}>
              Call Us
            </Text>
            <Text fontSize={12}>+91 6382775774</Text>
          </Stack>
          <Stack bgColor={"gray.200"} p={5}>
            <Box as={MdEmail} size="40px" color={"blue.500"} />
            <Text fontWeight={"bold"} fontSize={18}>
              Email Us
            </Text>
            <Text fontSize={12}>lakshmanan.coder@gmail.com</Text>
            <Text fontSize={12}>klakshmanan48@gmail.com</Text>
          </Stack>
          <Stack bgColor={"gray.200"} p={5}>
            <Box as={MdAccessTime} size="40px" color={"blue.500"} />
            <Text fontWeight={"bold"} fontSize={18}>
              Open Hours
            </Text>
            <Text fontSize={12}>Monday - Friday</Text>
            <Text fontSize={12}>10.00AM - 4.00PM</Text>
          </Stack>
        </SimpleGrid>
        <Box>
          <AspectRatio ratio={16 / 9}>
            <iframe
              title="contact_map"
              src="https://www.google.com/maps/embed/v1/place?q=SRI+PARAMAKALYANI+COLLEGE,+Main+Road,+Alwarkurichi,+Tamil+Nadu,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
          </AspectRatio>
        </Box>
      </SimpleGrid>
    </>
  );
}
