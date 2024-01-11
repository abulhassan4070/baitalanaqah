import { Box, Container, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { HeaderText } from "widgets/header";
import i18n from "i18nConfig";
import { NavLink } from "react-router-dom";

export default function CollaboratorsSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <Box id="collaborator" dir={i18n.dir()}>
      <Container maxW={"7xl"} py={{ base: 20, md: 28 }}>
        <HeaderText title={t("collaboratorsTitle")} />
        <div class="partner-tabs-container">
          <div
            class={activeTab === 0 ? "partner-tab is-active" : "partner-tab"}
            onClick={() => setActiveTab(0)}
          >
            {t("fabrics")}
          </div>
          <div
            class={activeTab === 1 ? "partner-tab is-active" : "partner-tab"}
            onClick={() => setActiveTab(1)}
          >
            {t("clients")}
          </div>
        </div>
        {activeTab === 0 ? (
          <SimpleGrid
            spacing={2}
            columns={{
              base: 2,
              sm: 3,
              md: 4,
              lg: 6,
            }}
          >
            {/* <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/manipal.png"
              />
            </div> */}
            {/*             
            <NavLink to={"/custom"}>
              <div
                class="column hero-brand-logo"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <Text>{t("andManyMore")}</Text>
              </div>
            </NavLink> */}
          </SimpleGrid>
        ) : (
          <SimpleGrid
            spacing={2}
            columns={{
              base: 2,
              sm: 3,
              md: 4,
              lg: 6,
            }}
          >
            {/* <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/new/public_is_sapient.png"
              />
            </div>
            <NavLink
              to={"/custom"}
              class="column hero-brand-logo"
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <Text>{t("andManyMore")}</Text>
            </NavLink> */}
          </SimpleGrid>
        )}
      </Container>
    </Box>
  );
}
