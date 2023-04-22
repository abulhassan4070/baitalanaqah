import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderText } from "widgets/header";

export default function CollaborationsPage() {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <>
      <Container maxW={"7xl"} p="12">
        <Breadcrumb
          fontWeight="medium"
          fontSize="sm"
          spacing="8px"
          textTransform="uppercase"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink color="gray.500" style={{ textDecoration: "none" }}>
              <NavLink to="/">Home</NavLink>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink style={{ textDecoration: "none" }}>
              Collaborations
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <br />
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
            CORPORATE
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
                src="https://smartinternz.com/documents/college_logos/new/5.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/6.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/7.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/8.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/9.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/10.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/11.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/12.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/13.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/14.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/15.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/38.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/17.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/18.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/19.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/20.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/21.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/22.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/23.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/24.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/25.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/26.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/39.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/28.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/29.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/30.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/31.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/32.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/33.png"
              />
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
                src="https://smartinternz.com/documents/college_logos/new/34.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/35.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/documents/college_logos/new/36.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/ibm.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/new/salesforce.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/vmware.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/new/task.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/new/apssdc_skillup.png"
              />
            </div>

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

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/new/rnslabs.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/vedizi.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/new/tericsoft.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/new/vibrant_finance.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/new/accelq.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/wavelabs.png"
              />
            </div>

            <div class="column hero-brand-logo">
              <Image
                alt=""
                src="https://smartinternz.com/assets/homepage/companie/paymatrix.png"
              />
            </div>
          </SimpleGrid>
        )}
      </Container>
    </>
  );
}
