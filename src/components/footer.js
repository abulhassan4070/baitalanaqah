import { Container, IconButton, SimpleGrid } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import logowithtext from "../assets/img/logowithtext.png";
import { Icon } from "@iconify/react";

export default function NavigationFooter() {
  return (
    <footer class="footer">
      <div class="footer-top">
        <Container maxW={"7xl"}>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 4,
            }}
            spacing={10}
          >
            <div class="col-lg-5 col-md-12 footer-info">
              <a href="index.html" class="logo d-flex align-items-center">
                <img
                  src={logowithtext}
                  alt="logo"
                  style={{
                    maxWidth: "150px",
                    height: "auto",
                  }}
                />
              </a>
              <p>Fashion that tells your story.</p>
              <br />
              <IconButton
                as="a"
                href="#"
                me={1}
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="#"
                me={1}
                aria-label="Instagram"
                icon={<FaInstagram fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="#"
                me={1}
                aria-label="Facebook"
                icon={<FaFacebookF fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="#"
                me={1}
                aria-label="Whatsapp"
                icon={<FaWhatsapp fontSize="1.25rem" />}
              />
            </div>

            <div class="col-lg-2 col-6 footer-links">
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
            </div>

            <div class="col-lg-2 col-6 footer-links">
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
            </div>

            <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Bait Al Anaqah <br />
                Dubai UAE
                <br />
                <strong>Phone:</strong> +1 9999 9999 99
                <br />
                <strong>Email:</strong> info@baitalanaqah.com
                <br />
              </p>
            </div>
          </SimpleGrid>
        </Container>
      </div>

      <div class="container hfont">
        <div class="copyright">
          &copy; 2023 Copyright{" "}
          <strong>
            <span>Bait Al Anaqah. </span>
          </strong>{" "}
          All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
