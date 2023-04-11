import {
  Box,
  ButtonGroup,
  Divider,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logowithtext from "../assets/img/logowithtext.png";

export default function NavigationFooter() {
  return (
    <Box px={10} as="footer" role="contentinfo" backgroundColor={"gray.100"}>
      <Stack
        spacing="8"
        
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        py={{ base: "4", md: "8" }}
      >
        <Stack
          direction={{ base: "column-reverse", md: "column", lg: "row" }}
          spacing={{ base: "12", md: "8" }}
        >
          <Stack
            direction={{
              sm: "row",
              base: "column",
            }}
            spacing="8"
          >
            <Stack spacing="4" minW="36" flex="1">
              <Stack spacing="3" shouldWrapChildren>
                <Link to={"#"}>About us</Link>
                <Link to={"#"}>Gift Cards</Link>
                <Link to={"#"}>Our Locations</Link>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Stack spacing="3" shouldWrapChildren>
                <Link to={"#"}>Contact Us</Link>
                <Link to={"#"}>Terms & Conditions</Link>
                <Link to={"#"}>Accesbility</Link>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
         <Stack spacing={{ base: "6", md: "8" }} align="start">
          <Text fontSize="lg" fontWeight="bold">
            <img
              src={logowithtext}
              alt="logo"
              style={{
                maxWidth: "150px",
                height: "auto",
                width: "100%",
              }}
            />
          </Text>
          <Text color="muted">
            <a target="_blank" rel="noreferrer" href="tel:9711111111">
              +971 1111 111
            </a>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:info@baitalanaqah.com"
            >
              info@baitalanaqah.com
            </a>
            <br />
          </Text>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        py="4"
        justify="space-between"
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Bait Al Anaqah. All rights reserved.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Instagram"
            icon={<FaInstagram fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Facebook"
            icon={<FaFacebookF fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Box>
  );
}
