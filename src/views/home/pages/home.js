import React from "react";

import AboutUsSection from "components/about";
import HeroSection from "../../../components/hero";
import TestimonialSection from "../../../components/testimonials";
import AbayaSection from "views/section/abaya";
import SuitsSection from "views/section/suits";
import CollaboratorsSection from "views/section/collaboration";
import ListOfProducts from "components/abaya";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <AbayaSection />
      <ListOfProducts id="16" name="Shirts" />
      <SuitsSection />
      <ListOfProducts id="12" name="Abaya" />
      <TestimonialSection />
      <CollaboratorsSection />
    </>
  );
}
