import React from "react";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Container,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18nConfig";
import InputField from "components/InputField";

export default function Profile(props) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [userData, setUserData] = React.useState(null);
  React.useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login", { replace: true });
    }
    setUserData(JSON.parse(localStorage.getItem("userdata")));
  }, [navigate]);
  return (
    <Container maxW="container.xl" mt={20} dir={i18n.dir()}>
      <Breadcrumb
        fontWeight="medium"
        fontSize="sm"
        spacing="8px"
        textTransform="uppercase"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink color="gray.500" style={{ textDecoration: "none" }}>
            <NavLink to="/">{t("home")}</NavLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink color="gray.500" style={{ textDecoration: "none" }}>
            <NavLink to="/profile">Profile</NavLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Container p={10}>
        <Box mt="20px">
          {userData && (
            <>
              <Center>
                <img
                  src={userData.profileImage}
                  alt="profile"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                  }}
                />
              </Center>
              <br />
              <InputField
                isRequired={true}
                type="email"
                placeholder="Your Email"
                label="Your Email Address"
                value={userData.email}
              />
              <InputField
                isRequired={true}
                type="text"
                placeholder="Your Name"
                label="Your Full Name"
                value={userData.email}
              />
              <InputField
                isRequired={true}
                type="number"
                placeholder="Your Mobile"
                label="Your Mobile Number"
                value={userData.mobile}
              />
              <Box
                className="buttonStyle small"
                mb="0px"
                style={{
                  marginBottom: "0px",
                }}
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("userdata");
                  window.location = "/";
                }}
              >
                Logout
              </Box>
            </>
          )}
        </Box>
      </Container>
    </Container>
  );
}
