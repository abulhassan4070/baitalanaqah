import React from "react";

import AboutUsSection from "components/about";
import HeroSection from "../../../components/hero";
import TestimonialSection from "../../../components/testimonials";
import AbayaSection from "views/section/abaya";
import SuitsSection from "views/section/suits";
import CollaboratorsSection from "views/section/collaboration";
import ListOfSuits from "components/suits";
import ListOfAbaya from "components/abaya";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <AbayaSection />
      <ListOfAbaya />
      <SuitsSection />
      <ListOfSuits />
      <TestimonialSection />
      <CollaboratorsSection />
    </>
  );
}
