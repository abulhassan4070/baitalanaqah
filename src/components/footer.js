import {
  Box,
  Center,
  Container,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import logowithtext from "../assets/img/logowithtext.png";
import { Icon } from "@iconify/react";
import { paigeColoOpacity } from "variables/constants";
import { paigeColor } from "variables/constants";

export default function NavigationFooter() {
  return (
    <footer class="footer" style={{ backgroundColor: paigeColoOpacity["5"] }}>
      <Box position="fixed" bottom="20px" right="20px" zIndex={3}>
        <IconButton
          borderRadius={"50%"}
          as="a"
          width={"60px"}
          height={"60px"}
          href="#"
          _hover={{
            backgroundColor: "black",
          }}
          backgroundColor={"black"}
          aria-label="Whatsapp"
          icon={<Icon icon="fa-brands:whatsapp" color="white" fontSize={25} />}
        />
      </Box>
      <div
        class="footer-top"
        style={{ backgroundColor: paigeColoOpacity["5"] }}
      >
        <Container maxW={"7xl"}>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 4,
            }}
            spacing={10}
          >
            <div class="footer-info text-center">
              <a href="index.html" class="logo d-flex align-items-center">
                <img
                  src={logowithtext}
                  alt="logo"
                  style={{
                    height: "auto",
                  }}
                />
              </a>
              <Center>
                <p>Fashion that tells your story.</p>
              </Center>
              <br />
            </div>
            <Box pt={5} className="footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Bait Al Anaqah,<br/> Dubai UAE
                <br />
                <strong>Phone:</strong> +1 9999 9999 99
                <br />
                <strong>Email:</strong> info@baitalanaqah.com
                <br />
              </p>
              <br />
              <IconButton
                background={paigeColor}
                as="a"
                href="#"
                me={1}
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem" />}
              />
              <IconButton
                background={paigeColor}
                as="a"
                href="#"
                me={1}
                aria-label="Instagram"
                icon={<FaInstagram fontSize="1.25rem" />}
              />
              <IconButton
                background={paigeColor}
                as="a"
                href="#"
                me={1}
                aria-label="Facebook"
                icon={<FaFacebookF fontSize="1.25rem" />}
              />
              <IconButton
                background={paigeColor}
                as="a"
                href="#"
                me={1}
                aria-label="Whatsapp"
                icon={<FaWhatsapp fontSize="1.25rem" />}
              />
            </Box>
            <Box pt={5} className="footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Icon icon="bi:chevron-right" />
                  <span>Home</span>
                </li>
                <li>
                  <Icon icon="bi:chevron-right" />
                  <span>Shop</span>
                </li>
                <li>
                  <Icon icon="bi:chevron-right" />
                  <span>About us</span>
                </li>
                <li>
                  <Icon icon="bi:chevron-right" />
                  <span>Contact us</span>
                </li>
              </ul>
            </Box>
            <Box pt={5} className="footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Icon icon="bi:chevron-right" />
                  <span>Fabrics</span>
                </li>
                <li>
                  <Icon icon="bi:chevron-right" />
                  <span>Showrooms</span>
                </li>
                <li>
                  <Icon icon="bi:chevron-right" />
                  <span>Appointments</span>
                </li>
                <li>
                  <Icon icon="bi:chevron-right" />
                  <span>Tailor</span>
                </li>
              </ul>
            </Box>
          </SimpleGrid>
        </Container>
        <div class="container ">
          <div class="copyright">
            &copy; 2023 Copyright
            <strong>
              <span>Bait Al Anaqah. </span>
            </strong>
            All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
