import { Box, Container, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { HeaderText } from "widgets/header";

export default function CollaboratorsSection() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <Box id="collaborator">
      <Container maxW={"7xl"} py={{ base: 20, md: 28 }}>
        <HeaderText
          title="Collaborators"
          subtitle="Some of our partners and collaborators"
        />
        <div class="partner-tabs-container">
          <div
            class={activeTab === 0 ? "partner-tab is-active" : "partner-tab"}
            onClick={() => setActiveTab(0)}
          >
            PARTNERS
          </div>
          <div
            class={activeTab === 1 ? "partner-tab is-active" : "partner-tab"}
            onClick={() => setActiveTab(1)}
          >
            CARPORATE
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
            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/manipal.png"
              />
            </div>
            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/2.png"
              />
            </div>
            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/3.png"
              />
            </div>
            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/4.png"
              />
            </div>
            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/6.png"
              />
            </div>
            <div
              class="column hero-brand-logo"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>And many more...</Text>
            </div>
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
            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/new/assetcues.png"
              />
            </div>
            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/new/cyrrup.png"
              />
            </div>
            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/new/enovvator_ingineering.png"
              />
            </div>
            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/new/global.png"
              />
            </div>
            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/new/public_is_sapient.png"
              />
            </div>
            <div
              class="column hero-brand-logo"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>And many more...</Text>
            </div>
          </SimpleGrid>
        )}
      </Container>
    </Box>
  );
}
