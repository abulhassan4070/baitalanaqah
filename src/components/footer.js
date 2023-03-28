import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaFacebookF,  FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function NavigationFooter() {
  return (
    <Box px={10} as="footer" role="contentinfo">
      <Stack
        spacing="8"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        py={{ base: "4", md: "8" }}
      >
        <Stack spacing={{ base: "6", md: "8" }} align="start">
          <Text fontSize="lg" fontWeight="bold">
            <svg width="220" height="20" viewBox="0 0 257 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M18.151 18.175h-.47c-.615 6.238-5.207 6.887-9.22 6.996v.504h9.69v-7.5ZM5.641.288H0v.47c1.59 0 1.916 1.153 1.916 3.389v17.31c0 2.451-.397 3.75-1.916 3.75v.468h5.64V.288ZM17.21 6.78h.47V.29h-9.22v.504c3.905.109 8.425.758 8.75 5.986Zm-4.158 9.953h.47V8.98h-.47c-.253 3.174-2.784 3.534-4.592 3.606v.541c1.771.072 4.339.469 4.592 3.606ZM26.963 16.66h-.507c0 3.246.037 8.547-5.206 8.547v.468H31.7v-.468c-4.737 0-4.737-5.337-4.737-8.547ZM20.707.288v.47c.94.071 1.99-.181 4.303 2.704l17.32 22.213h1.157v-4.688L27.397.288h-6.69Zm17.573.47c4.773-.037 4.737 5.156 4.737 8.51h.47c0-3.354-.109-8.547 5.134-8.51v-.47H38.28v.47ZM51.609.288l-.615 7.285h.615c1.012-4.977 3.941-6.78 9.98-6.816l.289-.469H51.609Zm6.22 24.883-.254.504h9.546l.867-8.402h-.578c-.868 4.508-3.544 7.826-9.582 7.898ZM68.168.288h-3.796L50.416 25.675h4.592L68.169.288ZM75.068 13.162C75.068 4.4 77.6 1.154 81.215.541V.036C74.273.721 70.91 6.455 70.91 13.162c0 6.708 3.363 12.117 10.305 12.766v-.505c-3.616-.54-6.147-3.462-6.147-12.26Zm19.344 0c0-6.707-3.399-12.44-10.377-13.126v.505c3.616.613 6.183 3.822 6.183 12.621 0 8.8-2.567 11.72-6.183 12.261v.505c6.978-.65 10.377-6.022 10.377-12.766ZM120.564 25.46v.504c2.965-.108 4.954-.65 7.268-2.2l-.398-5.59h-.47c-.434 4.508-3.399 6.888-6.4 7.285Zm6.4-17.743h.47l.398-5.553C125.879.577 123.529.072 120.564 0v.469c2.857.36 5.46 2.344 6.4 7.248Zm-20.356 5.265c0 7.5 4.411 12.369 11.1 12.946v-.469c-3.327-.433-6.472-2.813-6.472-12.477 0-9.52 3.073-12.044 6.472-12.477V.036c-6.689.577-11.1 5.373-11.1 12.946ZM142.834 24.377c-3.942 0-6.617-2.56-6.617-7.068V3.931c0-2.85 1.338-3.174 2.892-3.174V.288h-9.003v.47c1.591 0 2.531.684 2.531 3.1v13.163c0 5.878 3.724 8.979 8.389 8.979 4.483 0 8.822-2.38 8.786-8.835h-.47c0 4.616-2.82 7.212-6.508 7.212Zm2.241-23.62c4.195-.036 4.267 3.174 4.267 6.6h.47c0-3.426-.109-6.636 4.628-6.6V.288h-9.365v.47ZM157.326 17.02h-.47v6.925s2.278 1.694 7.195 1.983v-.469c-4.881-.613-6.363-4.435-6.725-8.438Zm11.534-4.146-5.966-3.895c-4.736-3.101-3.109-7.464.037-8.474V.036c-3.978.469-5.424 2.705-5.424 2.705-2.784 4.29.542 7.536 3.977 9.808l5.966 3.895c3.869 2.704 3.616 8.041-.578 9.015v.469c4.483-.433 5.749-2.885 5.749-2.885 1.916-2.993 1.085-6.96-3.761-10.17Zm3.255-5.157h.47V1.66S170.162.289 165.751 0v.505c4.809.505 6.038 3.967 6.364 7.212ZM176.398.288v6.347h.47C177.012.83 182.4.757 183.521.757h2.133v21.42c0 2.38-1.085 3.03-2.604 3.03v.468h8.823v-.468c-1.519 0-2.64-.65-2.64-3.03V.757h2.134c.506 0 6.544.072 6.689 5.878h.47V.288h-22.128ZM204.055 13.162c0-8.763 2.531-12.008 6.147-12.621V.036c-6.942.685-10.305 6.419-10.305 13.126 0 6.708 3.363 12.117 10.305 12.766v-.505c-3.616-.54-6.147-3.462-6.147-12.26Zm19.345 0c0-6.707-3.399-12.44-10.378-13.126v.505c3.616.613 6.183 3.822 6.183 12.621 0 8.8-2.567 11.72-6.183 12.261v.505c6.979-.65 10.378-6.022 10.378-12.766ZM231.075 16.696h-.47c0 4.075-.651 8.51-5.098 8.51v.47h10.232v-.47c-4.049 0-4.664-4.327-4.664-8.51Zm22.924 4.76V3.931c0-2.453 1.229-3.174 2.784-3.174V.288h-6.436v21.168c0 2.921-1.085 3.75-2.603 3.75v.47H257v-.47c-1.555 0-3.001-.829-3.001-3.75ZM226.592.288v.47c.867.071 2.603.071 3.977 2.307L241.163 26h.47l1.772-4.76L233.787.288h-7.195Z"></path></g></svg>
          </Text>
          <Text color="muted">
            <a target="_blank" rel="noreferrer" href="tel:916382775774">
              +91 6382775774
            </a>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:info@enzocustom.com"
            >
              info@enzocustom.com
            </a>
            <br />
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column-reverse", md: "column", lg: "row" }}
          spacing={{ base: "12", md: "8" }}
        >
          <Stack direction="row" spacing="8">
            <Stack spacing="4" minW="36" flex="1">
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link">About us</Button>
                <Button variant="link">Gift Cards</Button>
                <Button variant="link">Our Locations</Button>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link">Contact Us</Button>
                <Button variant="link">Terms & Conditions</Button>
                <Button variant="link">Accesbility</Button>
              </Stack>
            </Stack>
          </Stack>
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
          &copy; {new Date().getFullYear()} Enzo Custom. All rights reserved.
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
          {/* instagram */}
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
