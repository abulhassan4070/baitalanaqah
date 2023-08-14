import {
  Box,
  Center,
  Container,
  IconButton,
  SimpleGrid,
  Text,
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
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";

export default function NavigationFooter() {
  const { t } = useTranslation();
  // get url
  const url = window.location.href;
  return url.indexOf("customize") > -1 ? (
    <></>
  ) : (
    <footer class="footer" style={{ backgroundColor: paigeColoOpacity["5"] }}>
      <Box
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex={3}
        href="#"
        _hover={{
          backgroundColor: "black",
        }}
        display={"flex"}
        backgroundColor={"black"}
        color={"white"}
        style={{
          borderRadius: "50px",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          padding: "10px 15px",
        }}
      >
        <Icon icon="fa-brands:whatsapp" fontSize={25} />
        <Text fontSize={20} ms={3}>
          Whatsapp
        </Text>
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
                <p>{t("aboutShort")}</p>
              </Center>
              <br />
            </div>
            <Box
              pt={5}
              className="footer-contact text-center text-md-start"
              dir={i18n.dir()}
            >
              <h4>{t("contactUs")}</h4>
              <p>
                {t("title")},
                <br /> {t("dubai")} {t("UAE")}
                <br />
                <strong>{t("phone")}:</strong> +971 565777763
                <br />
                <strong>{t("email")}:</strong> info@baitalanaqah.com
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
            <Box pt={5} className="footer-links" dir={i18n.dir()}>
              <h4>{t("usefulLinks")}</h4>
              <ul>
                <li>
                  <Icon icon="bi:chevron-right" />
                  <span>{t("home")}</span>
                </li>
                <li>
                  <Icon icon="bi:chevron-right" />
                  <span>{t("shop")}</span>
                </li>
                <li>
                  <Icon icon="bi:chevron-right" />
                  <span>{t("story")}</span>
                </li>
                <li>
                  <Icon icon="bi:chevron-right" />
                  <span>{t("contactUs")}</span>
                </li>
              </ul>
            </Box>
            <Box pt={5} className="footer-links" dir={i18n.dir()}>
              <h4>{t("ourServices")}</h4>
              <ul>
                <li>
                  <Icon icon="bi:chevron-right" />
                  <span>{t("fabrics")}</span>
                </li>
                <li>
                  <Icon icon="bi:chevron-right" />
                  <span>{t("showrooms")}</span>
                </li>
                <li>
                  <Icon icon="bi:chevron-right" />
                  <span>{t("appointments")}</span>
                </li>
                <li>
                  <Icon icon="bi:chevron-right" />
                  <span>{t("tailors")}</span>
                </li>
              </ul>
            </Box>
          </SimpleGrid>
        </Container>
        <div class="container " dir={i18n.dir()}>
          <div class="copyright">
            &copy; {t("copyright1")}
            <strong>
              <span>{t("title")}. </span>
            </strong>
            {t("copyright2")}
          </div>
        </div>
      </div>
    </footer>
  );
}
